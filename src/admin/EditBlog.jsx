/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, } from 'react-router-dom'
import axios from 'axios'

const EditBlog = () => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        author_name: ''
    })

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { id } = useParams();  // Get the blog ID from URL params
    const navigate = useNavigate();  // To navigate after successful update

    // Fetch the blog data to populate the form
    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/admin/blogs/${id}`);
                setFormData({
                    title: response.data.title,
                    description: response.data.description,
                    author_name: response.data.author_name
                });
                setLoading(false);
            } catch (err) {
                setError('Error fetching blog data');
                setLoading(false);
            }
        };

        fetchBlogData();
    }, [id]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/admin/update-blog/${id}`, formData);
            navigate('/admin/dashboard/all-blogs');  // Navigate to the blogs list page
        } catch (err) {
            setError('Error updating the blog');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }




    return (
        <>
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-semibold mb-4">Edit Blog</h2>
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
                    {/* Blog Title */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">
                            Blog Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter blog title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Blog Description */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="description">
                            Blog Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter blog description"
                            rows="4"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    {/* Blog Author */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="author_name">
                            Author Name
                        </label>
                        <input
                            type="text"
                            id="author_name"
                            name="author_name"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter author's name"
                            value={formData.author_name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
                    >
                        Update Blog
                    </button>
                </form>
            </div>

        </>
    )
}

export default EditBlog