/* eslint-disable no-unused-vars */
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const BannerIndex = () => {
    const banners = [
        {
            id: 1,
            image: 'https://via.placeholder.com/150',
            title: 'Summer Sale Banner',
            status: 'active',
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/150',
            title: 'Winter Collection Banner',
            status: 'inactive',
        },
    ];

    return (
        <div className=" bg-gray-100 min-h-screen">
            <div className="overflow-x-auto bg-white rounded-md shadow">
                <table className="min-w-full table-auto border-collapse border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 sm:px-6 py-3 border-b border-gray-200 text-left text-gray-600">Image</th>
                            <th className="px-4 sm:px-6 py-3 border-b border-gray-200 text-left text-gray-600">Title</th>
                            <th className="px-4 sm:px-6 py-3 border-b border-gray-200 text-left text-gray-600">Status</th>
                            <th className="px-4 sm:px-6 py-3 border-b border-gray-200 text-center text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {banners.map((banner) => (
                            <tr key={banner.id} className="hover:bg-gray-50">
                                <td className="px-4 sm:px-6 py-4 border-b border-gray-200">
                                    <img
                                        src={banner.image}
                                        alt={banner.title}
                                        className="w-16 h-16 object-cover rounded mx-auto"
                                    />
                                </td>
                                <td className="px-4 sm:px-6 py-4 border-b border-gray-200 text-gray-700">
                                    {banner.title}
                                </td>
                                <td className="px-4 sm:px-6 py-4 border-b border-gray-200 text-center">
                                    <div className="flex items-center justify-center space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={banner.status === 'active'}
                                            className="form-checkbox h-4 w-4 text-blue-500 focus:ring focus:ring-blue-300"
                                            onChange={() =>
                                                console.log(`Toggle status of banner ${banner.id}`)
                                            }
                                        />
                                        <span>{banner.status === 'active' ? 'Active' : 'Inactive'}</span>
                                    </div>
                                </td>
                                <td className="px-4 sm:px-6 py-4 border-b border-gray-200 text-center">
                                    <div className="flex justify-center space-x-2">
                                        <button
                                            className="text-blue-500 hover:text-blue-700"
                                            onClick={() => console.log(`Edit banner ${banner.id}`)}
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            className="text-red-500 hover:text-red-700"
                                            onClick={() => console.log(`Delete banner ${banner.id}`)}
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

export default BannerIndex;
