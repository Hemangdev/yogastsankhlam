/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import $ from 'jquery';
import 'datatables.net'
import { Link } from 'react-router-dom';

const BlogIndex = () => {


  useEffect(() => {
    // Initialize the DataTable after the component is mounted
    const table = $('#example').DataTable({
      responsive: true
    });

    // Cleanup function to destroy the DataTable when the component unmounts
    return () => {
      // Check if the DataTable instance exists before calling destroy
      if ($.fn.dataTable.isDataTable('#example')) {
        table.destroy();
      }
    };
  }, []);


  const blogs = [
    {
      id: 1,
      image: 'https://placehold.co/16x16',
      title: 'First Blog Title',
      status: 'active',
    },
    {
      id: 2,
      image: 'https://placehold.co/16x16',
      title: 'Second Blog Title',
      status: 'inactive',
    },
  ];

  return (

    <>
      <div className="flex justify-between mx-2 my-2 mb-4 ">
        <h1 className='text-3xl sm:text-4xl md:text-5xl'>Blogs</h1>
        <Link to={'/admin/dashboard/add-blog'}>
          <button className='px-4 py-2 bg-yellow-700 text-black font-bold rounded-md'>Add Blog</button>
        </Link>
      </div>

      <div className=" bg-gray-100 min-h-screen">

        <div className="overflow-x-auto bg-white rounded-md shadow p-4">
          <table id="example" className="display responsive nowrap" style={{ width: '100%' }}>
            <thead className="bg-gray-100">
              <tr>
                <th >Image</th>
                <th>Title</th>
                <th >Status</th>
                <th >Actions</th>  
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>
                    <img src={blog.image} alt={blog.title} className="w-16 h-16 object-cover rounded mx-auto" />
                  </td>
                  <td >{blog.title}</td>
                  <td >
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </td>
                  <td >
                    <div className="flex  space-x-2">
                      <button
                        className="p-4 rounded-md bg-yellow-700"
                        onClick={() => console.log(`Edit blog ${blog.id}`)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="p-4 rounded-md bg-red-700 text-white"
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
    </>
  );
};

export default BlogIndex;
