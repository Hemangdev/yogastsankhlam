/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, activeTab, setActiveTab, tabs }) => {
    return (
        <div
            className={`fixed inset-0 z-50 bg-[#fff7eb] shadow-md transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform md:relative md:translate-x-0 md:w-1/8 min-h-screen`}
        >
            <h2 className="text-lg font-bold text-gray-800 p-4">Yogastsankhlam</h2>
            <ul className="space-y-2">
                <li className="p-4 cursor-pointer text-gray-700 hover:bg-gray-200">
                    <Link
                        to="/admin/dashboard"
                        onClick={() => { 
                            setIsSidebarOpen(false); // Close sidebar on link click (mobile)
                        }}
                    >
                        Home
                    </Link>
                </li>
                <li className="p-4 cursor-pointer text-gray-700 hover:bg-gray-200">
                    <Link
                        to="/admin/dashboard/all-blogs"
                        className={`block ${activeTab === 'Blogs' ? 'bg-gray-200 font-bold' : ''}`}
                        onClick={() => { 
                            setIsSidebarOpen(false); // Close sidebar on link click (mobile)
                        }}
                    >
                        Blogs
                    </Link>
                </li>
                <li className="p-4 cursor-pointer text-gray-700 hover:bg-gray-200">
                    <Link
                        to="/admin/dashboard/all-banner"
                        className={`block ${activeTab === 'Banners' ? 'bg-gray-200 font-bold' : ''}`}
                        onClick={() => { 
                            setIsSidebarOpen(false); // Close sidebar on link click (mobile)
                        }}
                    >
                        Banners
                    </Link>
                </li>
                <li className="p-4 cursor-pointer text-gray-700 hover:bg-gray-200">
                    <Link
                        to="/admin/dashboard/general-setting"
                        className={`block ${activeTab === 'General Setting' ? 'bg-gray-200 font-bold' : ''}`}
                        onClick={() => { 
                            setIsSidebarOpen(false); // Close sidebar on link click (mobile)
                        }}
                    >
                        General Setting
                    </Link>
                </li>
                <li className="p-4 cursor-pointer text-gray-700 hover:bg-gray-200">
                    <Link
                        to="/admin/dashboard/profile"
                        className={`block ${activeTab === 'Profile' ? 'bg-gray-200 font-bold' : ''}`}
                        onClick={() => { 
                            setIsSidebarOpen(false); // Close sidebar on link click (mobile)
                        }}
                    >
                        Profile
                    </Link>
                </li>
            </ul>
            {/* Close Button for Mobile */}
            <button
                className="absolute top-4 right-4 md:hidden text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                onClick={() => setIsSidebarOpen(false)}
            >
                ✕
            </button>
        </div>
    );
};

export default Sidebar;
