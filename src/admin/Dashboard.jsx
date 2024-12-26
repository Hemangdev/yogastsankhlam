/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import GeneralSettings from './GeneralSettings';
import DashboardHome from './DashboardHome';
import ProfileRoutes from './ProfileRoutes';
import BlogIndex from './BlogIndex';
import AddBlog from './AddBlog';
import BannerIndex from './BannerIndex';
import AddBanner from './AddBanner';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const tabs = ['Dashboard', 'General Settings', 'Blogs','Add Blog', 'Banner','Add Banner', 'Profile',];

    const renderPanel = () => {
        switch (activeTab) {
            case 'Profile':
                return <div><ProfileRoutes/></div>
            case 'Dashboard':
                return <div><DashboardHome /></div>;
            case 'General Settings':
                return <div><GeneralSettings /></div>;
            case 'Blogs':
                return <div><BlogIndex/></div>;
            case 'Add Blog':
                return <div><AddBlog/></div>;
            case 'Banner':
                return <div><BannerIndex/></div>;
            case 'Add Banner' : 
                return <div><AddBanner/></div>;    
            default:
                return <div>Select a tab to view its content.</div>;
        }
    };

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Sidebar */}
            <div
                className={`fixed inset-0 z-50 bg-[#fff7eb] shadow-md transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } transition-transform md:relative md:translate-x-0 md:w-1/4 h-screen`}
            >
                <h2 className="text-lg font-bold text-gray-800 p-4">Yogastsankhlam</h2>
                <ul className="space-y-2">
                    {tabs.map((tab) => (
                        <li
                            key={tab}
                            className={`p-4 cursor-pointer text-gray-700 hover:bg-gray-200 ${activeTab === tab ? 'bg-gray-200 font-bold' : ''
                                }`}
                            onClick={() => {
                                setActiveTab(tab);
                                setIsSidebarOpen(false); // Close sidebar on tab click (mobile)
                            }}
                        >
                            {tab}
                        </li>
                    ))}
                </ul>
                {/* Close Button for Mobile */}
                <button
                    className="absolute top-4 right-4 md:hidden text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                    onClick={() => setIsSidebarOpen(false)}
                >
                    ✕
                </button>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6">
                {/* Mobile Toggle Button */}
                <button
                    className="md:hidden p-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 mb-4"
                    onClick={() => setIsSidebarOpen(true)}
                >
                    ☰ Menu
                </button>

                <h1 className="text-3xl font-bold text-gray-800 mb-4">{activeTab}</h1>
                <div className="">{renderPanel()}</div>
            </div>
        </div>
    );
};

export default Dashboard;
