/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBlog = () => {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        author_name: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the data to be sent to the backend
        const dataToSend = {
            title: formData.title,
            description: formData.description,
            author_name: formData.author_name,
        };

        try {
            const response = await axios.post('http://localhost:3000/admin/add-blogs', dataToSend, {
                headers: {
                    'Content-Type': 'application/json', // Since we are not uploading a file, use application/json
                },
            });

            console.log('Blog added successfully:', response.data);

            // Show success toast
            toast.success('Blog added successfully!', {
                autoClose: 5000, // Auto close after 5 seconds
            });

            // You can clear the form here if needed
            // setFormData({ title: '', description: '', author_name: '' });

        } catch (error) {
            console.error('Error adding blog:', error.response ? error.response.data : error);

            // Show error toast
            toast.error('Error adding blog. Please try again later.', {
                autoClose: 5000, // Auto close after 5 seconds
            });
        }
    };


    return (
        <>
            <div className="flex justify-between mx-2 my-2 mb-4 ">
                <h1 className='text-2xl sm:text-4xl md:text-5xl'>Add Blogs</h1>
                <Link to={'/admin/dashboard/all-blogs'}>
                    <button className='px-4 py-2 bg-yellow-700 text-black font-bold rounded-md'>List Blogs</button>
                </Link>
            </div>

            <div className="bg-gray-100 min-h-screen">
                <form
                    className="bg-white p-6 rounded-md shadow-md max-w-4x grid grid-cols-1 md:grid-cols-2 gap-4"
                    onSubmit={handleSubmit}
                >
                    {/* Blog Title */}
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Blog Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter blog title"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                            value={formData.blogTitle}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Blog Post By */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Blog Post By</label>
                        <input
                            type="text"
                            name="author_name"
                            placeholder="Author's name"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                            value={formData.blogPostBy}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Blog Short Description */}
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Blog Short Description</label>
                        <textarea
                            name="blogShortDescription"
                            placeholder="Enter a short description"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                            rows="2"
                            value={formData.blogShortDescription}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    {/* Blog Description */}
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Blog Description</label>
                        <textarea
                            name="description"
                            placeholder="Enter the full description"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                            rows="5"
                            value={formData.blogDescription}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-1 md:col-span-2 text-right">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </>
    );
};

export default AddBlog;
