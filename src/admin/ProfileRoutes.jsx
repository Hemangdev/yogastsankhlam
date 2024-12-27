/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';



const ProfileRoutes = () => {

    const navigate = useNavigate();
    // Function for logout the user

    const handleLogout = async () => {
        try {
            const response = await axios.get("http://localhost:3000/auth/logout", {
                withCredentials: true, // Include cookies in the request
            });
    
            if (response.data.success) {
                // Clear localStorage or any other session-related info if necessary
                localStorage.removeItem("token");
    
                // Redirect to the login page
                navigate("/admin");
            } else {
                console.error("Logout failed:", response.data.message);
            }
        } catch (error) {
            console.error("An error occurred while logging out:", error);
        }
    };


    return (
        <div className=" bg-gray-100 min-h-screen">

            <form className="grid grid-cols-1 gap-6 bg-white p-6 rounded-md shadow md:grid-cols-2">
                {/* Profile Name */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Profile Name</label>
                    <input
                        type="text"
                        placeholder="Enter your profile name"
                        className="block w-full text-gray-700 border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                {/* Display Photo */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Display Photo</label>
                    <input
                        type="file"
                        accept="image/*"
                        className="block w-full text-gray-700 border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                {/* Phone Number */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="block w-full text-gray-700 border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                {/* Email ID */}
                <div>
                    <label className="block text-gray-700 font-medium mb-2">Email ID</label>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="block w-full text-gray-700 border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                {/* Logout Button */}
                <div className="col-span-1 md:col-span-2 text-right">
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
                    >
                        Logout
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfileRoutes;
