/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Home'); // Default tab
    

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                
            />

            {/* Main Content Area */}
            <div className="flex-1 p-6 w-full">
                {/* Mobile Toggle Button */}
                <button
                    className="md:hidden p-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 mb-4"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    ☰ Menu
                </button> 
                <div className="">
                    {/* Render Route content */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
