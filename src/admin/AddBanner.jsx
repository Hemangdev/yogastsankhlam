/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const AddBanner = () => {
    return (
        <>
            <div className="flex justify-between mx-2 my-2 mb-4 ">
                <h1 className='text-2xl sm:text-4xl md:text-5xl'>Add Banner</h1>
                <Link to={'/admin/dashboard/add-banners'}>
                    <button className='px-4 py-2 bg-yellow-700 text-black font-bold rounded-md'>Banner List</button>
                </Link>
            </div>


            <div className="bg-gray-100 min-h-screen">
                <form className="bg-white p-6 rounded-md shadow-md max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Banner Image Input */}
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Banner Image</label>
                        <input
                            type="file"
                            accept="image/png, image/jpeg, image/jpg"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                        />
                        <small className="text-red-600">
                            Allowed formats: PNG, JPEG, JPG. Size must be 1900x800 pixels.
                        </small>
                    </div>

                    {/* Banner Title Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Banner Title</label>
                        <input
                            type="text"
                            placeholder="Enter banner title"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                        />
                    </div>

                    {/* Banner URL Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Banner URL</label>
                        <input
                            type="url"
                            placeholder="Enter banner URL"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                        />
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

export default AddBanner;
