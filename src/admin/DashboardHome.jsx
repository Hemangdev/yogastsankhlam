/* eslint-disable no-unused-vars */
import React from 'react';
import RevenueInfo from './RevenueInfo';
import CoursesEnquiryTable from './CoursesEnquiryTable';
import { LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashboardHome = () => {
  // Line chart data (Website traffic)
  const lineData = [
    { name: 'Jan', traffic: 1200 },
    { name: 'Feb', traffic: 1500 },
    { name: 'Mar', traffic: 1800 },
    { name: 'Apr', traffic: 2200 },
    { name: 'May', traffic: 2500 },
    { name: 'Jun', traffic: 2800 },
  ];

  // Pie chart data (Course Completion)
  const pieData = [
    { name: 'Completed', value: 60 },
    { name: 'Pending', value: 40 },
  ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4 text-center md:text-left">Welcome back, Dipanita!</h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#19486d] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold">Active Users</h2>
          <p className="text-lg mt-2">There are currently 1,200 active users on the platform.</p>
        </div>

        <div className="bg-[#4D784F] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold">Total Courses</h2>
          <p className="text-lg mt-2">We have 75 courses available for users to enroll in.</p>
        </div>

        <div className="bg-[#cec574] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold">Website Traffic</h2>
          <p className="text-lg mt-2">Website traffic has increased by 30% in the last month.</p>
        </div>

        <div className="bg-[#A54039] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
          <h2 className="text-xl font-semibold">Revenue</h2>
          <p className="text-lg mt-2">The current revenue for the month is $25,000.</p>
        </div>
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Line Chart: Website Traffic */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Website Traffic (Monthly)</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="traffic" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart: Course Completion */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Course Completion</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} fill="#10b981" label />
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-8">
        <RevenueInfo />
      </div>

      <div className="mt-8">
        <CoursesEnquiryTable />
      </div>
    </div>
  );
};

export default DashboardHome;
