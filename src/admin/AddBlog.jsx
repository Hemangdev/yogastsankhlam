/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddBlog = () => {

    const [formData, setFormData] = useState({
        blogTitle: "",
        blogPostBy: "",
        thumbnailImage: null,
        blogShortDescription: "",
        blogDescription: "",
    });


    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        // Add your form submission logic here
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
                            name="blogTitle"
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
                            name="blogPostBy"
                            placeholder="Author's name"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                            value={formData.blogPostBy}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Thumbnail Image */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail Image</label>
                        <input
                            type="file"
                            name="thumbnailImage"
                            accept="image/png, image/jpeg, image/jpg"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                            onChange={handleChange}
                        />
                        <small className="text-red-600">
                            Allowed formats: PNG, JPEG, JPG. Must be smaller than 5MB and 300x300 size.
                        </small>
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
                            name="blogDescription"
                            placeholder="Enter the full description"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 "
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
            </div>
        </>
    );
};

export default AddBlog;
