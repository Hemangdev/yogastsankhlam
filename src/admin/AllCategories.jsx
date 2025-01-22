/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery';
import 'datatables.net'

const tableData = [
    {
        parentName: 'Health',
        categoryName: 'Mental Health',
        status: true,
        createdAt: '2011-04-25',
    },
    {
        parentName: 'Wellness',
        categoryName: 'Physical fitness & wellness',
        status: false,
        createdAt: '2011-07-25',
    },
    {
        parentName: 'Sprituality',
        categoryName: 'Spritual & religion health',
        status: true,
        createdAt: '2009-01-12',
    },
    // Add more data as needed
];

const AllCategories = () => {

    useEffect(() => {
        // Initialize the DataTable after the component is mounted
        $(document).ready(function () {
            // Check if the DataTable is already initialized
            if (!$.fn.dataTable.isDataTable('#example')) {
                $('#example').DataTable({
                    responsive: true
                });
            }
        });

        // Cleanup function to destroy the DataTable when the component unmounts
        return () => {
            if ($.fn.dataTable.isDataTable('#example')) {
                $('#example').DataTable().destroy();
            }
        };
    }, []);


    return (
        <>
            <h1 className='text-3xl sm:text-4xl md:text-5xl'>Categories</h1>
            <div className="flex justify-end mb-4 ">
                <Link to={'/admin/dashboard/add-blog'}>
                    <button className='px-4 py-2 bg-yellow-700 text-black font-bold rounded-md mx-2 my-2'>Add Blog</button>
                </Link>
                <Link to={'/admin/dashboard/add-blog-category'}>
                    <button className='px-4 py-2 bg-green-700 text-white font-bold rounded-md mx-2 my-2'>Add Category</button>
                </Link>
            </div>

            <div className="bg-gray-100 min-h-screen">
                <div className="overflow-x-auto bg-white rounded-md shadow p-4">
                    <table id="example" className="display responsive nowrap" style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th>Parent Name</th>
                                <th>Category Name</th>
                                <th>Status</th>
                                <th>Created At</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.parentName}</td>
                                    <td>{row.categoryName}</td>
                                    <td>
                                        <label className="switch">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                        </label>
                                    </td>
                                    <td>{row.createdAt}</td>
                                    <td>
                                        <div className="d-flex justify-content-around">
                                            <button className='btn btn-sm bg-warning' onClick={() => alert(`Edit ${row.productName}`)}>
                                                <i className="bi bi-pencil-square text-dark"></i>
                                            </button>
                                            <button className='btn btn-sm bg-danger' onClick={() => alert(`Delete ${row.productName}`)}>
                                                <i className="bi bi-trash text-white"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>Parent Name</th>
                                <th>Category Name</th>
                                <th>Status</th>
                                <th>Created At</th>
                                <th>Actions</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>


        </>
    )
}

export default AllCategories