/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const GeneralSettings = () => {
  return (

    <>
      <div className="flex justify-between mx-2 my-2 mb-4 ">
        <h1 className='text-2xl sm:text-4xl md:text-5xl'>General Setting</h1> 
      </div>
      
      <div className=" bg-gray-100 min-h-screen">
        <form className="grid grid-cols-1 gap-6 bg-white p-6 rounded-md shadow md:grid-cols-2">
          {/* Site Favicon */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Site Favicon</label>
            <input
              type="file"
              placeholder='Upload Site Favicon'
              accept="image/*"
              className="block w-full text-gray-700 border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Site Logo */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Site Logo</label>
            <input
              type="file"
              accept="image/*"
              className="block w-full text-gray-700 border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Site Meta Title */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Site Meta Title</label>
            <input
              placeholder='Enter Site meta title'
              type="text"
              className="block w-full text-gray-700 border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Site Meta Keyword */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Site Meta Keyword</label>
            <input
              placeholder='Enter Site meta keyword'
              type="text"
              className="block w-full text-gray-700 border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Site Meta Description */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Site Meta Description</label>
            <textarea
              rows="1"
              placeholder='Enter Site meta description'
              className="block w-full text-gray-700 border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
          </div>

          {/* Official Email ID */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Official Email ID</label>
            <input
              type="email"
              placeholder='Enter Official Mail ID'
              className="block w-full text-gray-700 border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Copyright Field */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">Copyright</label>
            <input
              placeholder='Copyright © 2025'
              type="text"
              className="block w-full text-gray-700 border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 text-right">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </>

  );
};

export default GeneralSettings;
