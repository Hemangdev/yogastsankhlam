/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import $ from 'jquery';
import 'datatables.net'
import { Link } from 'react-router-dom';
import axios from 'axios';
import loader from '../assets/loading.gif'

const BlogIndex = () => {

  const [blogsData, setBlogsData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const tableElement = $('#example');
    console.log(tableElement.length); // Should log the element length, should be > 0 if table exists

    if (tableElement.length > 0) {
      const table = tableElement.DataTable({
        responsive: true
      });

      return () => {
        if ($.fn.dataTable.isDataTable('#example')) {
          table.destroy();
        }
      };
    }
  }, []);

  // Fetching the blogs and showing in the table layout
  useEffect(() => {
    axios.get('http://localhost:3000/admin/blogs')
      .then((response) => {
        console.log(response.data);

        // Ensure response.data is an array
        if (Array.isArray(response.data)) {
          setBlogsData(response.data);  // Set blogs data as array
        } else {
          console.error('Expected an array of blogs but got:', response.data);
          setError('Invalid data format');
        }
        setLoading(false);

      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      })
  }, [])

  if (loading) {
    return <img src={loader} alt="Loading..." />; // Show loading GIF while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>;  // Show error message if there's an issue
  }


  const blogs = [
    {
      id: 1,
      image: 'https://placehold.co/16x16',
      title: 'Sophia Mesabhi on Profitable and Sustainable Growth',
      status: 'active',
      category: 'Mental-Health'
    },
    {
      id: 2,
      image: 'https://placehold.co/16x16',
      title: 'Building Resilience for Mental Health and Success',
      status: 'inactive',
      category: 'Sprituality'
    },
    {
      id: 3,
      image: 'https://placehold.co/16x16',
      title: 'Supporting Mental Well-Being in Challenging Times',
      status: 'inactive',
      category: 'Physical fitness & Well-being'
    },
  ];

  return (

    <>
      <h1 className='text-3xl sm:text-4xl md:text-5xl'>Blogs</h1>
      <div className="flex justify-end mb-4 ">
        <Link to={'/admin/dashboard/add-blog'}>
          <button className='px-4 py-2 bg-yellow-700 text-black font-bold rounded-md mx-2 my-2'>Add Blog</button>
        </Link>
        <Link to={'/admin/dashboard/add-blog-category'}>
          <button className='px-4 py-2 bg-green-700 text-white font-bold rounded-md mx-2 my-2'>Add Category</button>
        </Link>
      </div>

      <div className=" bg-gray-100 min-h-screen">
        <div className="overflow-x-auto bg-white rounded-md shadow p-4">
          <table id="example" className="display responsive nowrap cell-border" style={{ width: '100%' }}>
            <thead className="bg-gray-100">
              <tr>
                <th >Author Name</th>
                <th>Title</th>
                <th>Category</th>
                <th >Status</th>
                <th >Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogsData.map((blog, index) => (
                <tr key={index}>
                  <td>
                    {blog.author_name}
                    {/* <img src="https://placehold.co/16x16" alt={blog.title} className="w-16 h-16 object-cover rounded mx-auto" /> */}
                  </td>
                  <td>{blog.title}</td>
                  <td>Sprituality</td>
                  <td >
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </td>
                  <td >
                    <div className="flex  space-x-2">
                      <Link to={`/admin/dashboard/update-blog/${blog.id}`}>
                        <button
                          className="p-4 rounded-md bg-yellow-700"
                          onClick={() => console.log(`Edit blog ${blog.id}`)}
                        >
                          <FaEdit />
                        </button>
                      </Link>

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
