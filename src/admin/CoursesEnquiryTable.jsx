/* eslint-disable no-unused-vars */
// CoursesEnquiryTable.jsx
import React from 'react';

const CoursesEnquiryTable = () => {
  const enquiries = [
    { courseName: 'React for Beginners', name: 'John Doe', email: 'john@example.com', status: 'Pending' },
    { courseName: 'Advanced Node.js', name: 'Jane Smith', email: 'jane@example.com', status: 'Approved' },
    { courseName: 'Vue.js Masterclass', name: 'Robert Brown', email: 'robert@example.com', status: 'Pending' },
    { courseName: 'JavaScript Essentials', name: 'Alice Green', email: 'alice@example.com', status: 'Approved' },
  ];

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-semibold mb-4">Courses Enquiry</h3>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 text-left">Course Name</th>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enquiry, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4">{enquiry.courseName}</td>
              <td className="py-2 px-4">{enquiry.name}</td>
              <td className="py-2 px-4">{enquiry.email}</td>
              <td className="py-2 px-4">{enquiry.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoursesEnquiryTable;
