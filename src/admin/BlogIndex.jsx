/* eslint-disable no-unused-vars */
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BlogIndex = () => {
  const navigate = useNavigate();

  const blogs = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: 'First Blog Title',
      status: 'active',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      title: 'Second Blog Title',
      status: 'inactive',
    },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Blog Index</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
          onClick={() => navigate('/add-blog')}
        >
          Add Blog
        </button>
      </div>
      <div className="overflow-x-auto bg-white rounded-md shadow">
        <table className="w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b border-gray-200 text-left text-gray-600">Image</th>
              <th className="px-4 py-2 border-b border-gray-200 text-left text-gray-600">Title</th>
              <th className="px-4 py-2 border-b border-gray-200 text-left text-gray-600">Status</th>
              <th className="px-4 py-2 border-b border-gray-200 text-center text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b border-gray-200">
                  <img src={blog.image} alt={blog.title} className="w-16 h-16 object-cover rounded mx-auto" />
                </td>
                <td className="px-4 py-2 border-b border-gray-200 text-gray-700">{blog.title}</td>
                <td className="px-4 py-2 border-b border-gray-200">
                  <div className="flex flex-col items-start">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name={`status-${blog.id}`}
                        value="active"
                        checked={blog.status === 'active'}
                        className="text-blue-500 focus:ring focus:ring-blue-300"
                        onChange={() => console.log(`Set blog ${blog.id} to active`)}
                      />
                      <span>Active</span>
                    </label>
                    <label className="flex items-center space-x-2 mt-1">
                      <input
                        type="radio"
                        name={`status-${blog.id}`}
                        value="inactive"
                        checked={blog.status === 'inactive'}
                        className="text-blue-500 focus:ring focus:ring-blue-300"
                        onChange={() => console.log(`Set blog ${blog.id} to inactive`)}
                      />
                      <span>Inactive</span>
                    </label>
                  </div>
                </td>
                <td className="px-4 py-2 border-b border-gray-200 text-center">
                  <div className="flex justify-center space-x-2">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => console.log(`Edit blog ${blog.id}`)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => console.log(`Delete blog ${blog.id}`)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogIndex;
