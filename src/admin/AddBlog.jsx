/* eslint-disable no-unused-vars */
import React from 'react';

const AddBlog = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <form className="bg-white p-6 rounded-md shadow-md max-w-4x grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Blog Title */}
                <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Blog Title</label>
                    <input
                        type="text"
                        placeholder="Enter blog title"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                    />
                </div>

                {/* Blog Post By */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Blog Post By</label>
                    <input
                        type="text"
                        placeholder="Author's name"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                    />
                </div>

                {/* Thumbnail Image */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail Image</label>
                    <input
                        type="file"
                        accept="image/png, image/jpeg, image/jpg"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                    />
                    <small className="text-red-600">Allowed formats: PNG, JPEG, JPG. Must be smaller than 5MB and 300x300 size.</small>
                </div>

                {/* Blog Short Description */}
                <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Blog Short Description</label>
                    <textarea
                        placeholder="Enter a short description"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                        rows="2"
                    ></textarea>
                </div>

                {/* Blog Description */}
                <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Blog Description</label>
                    <textarea
                        placeholder="Enter the full description"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                        rows="5"
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
    );
};

export default AddBlog;
