/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3000/auth/admin", // Correct backend URL for the /admin route
                { username, password }, // Send username and password in the request body
                { withCredentials: true } // Include cookies for session handling
            );

            if (response.data.success) {
                // Save session or token if needed
                localStorage.setItem("token", "mockToken123"); // Optional: adjust based on backend logic
                navigate("/admin/dashboard"); // Redirect to the admin dashboard
            } else {
                setError(response.data.message); // Display backend error message
            }
        } catch (error) {
            setError("An error occurred while logging in");
            console.error("Login error:", error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff7eb] px-4 sm:px-8">
            {/* Heading Section */}
            <div className="text-center mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3d211a] mb-2">
                    Yogastsankhlam - Yoga & Meditation Studio
                </h1>
                <p className="text-sm sm:text-xl text-[#63948b]">
                    Rejuvenate your mind, body, and soul with the power of yoga and meditation.
                </p>
            </div>

            {/* Login Form */}
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-3">
                    AdminLogin
                </h2>
                <p className="text-center text-gray-900 mb-3">Sign in to start your session</p>
                {/* Display error message if login fails */}
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <form onSubmit={handleLogin}>
                    {/* Username Field */}
                    <div className="mb-4">
                        <label
                            htmlFor="username"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    {/* Password Field */}
                    <div className="mb-4 relative">
                        <label
                            htmlFor="password"
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your password"
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-600 hover:text-gray-800"
                            >
                                {showPassword ? (
                                    <IoEyeSharp />
                                ) : (
                                    <IoEyeOffSharp />
                                )}
                            </button>
                        </div>
                    </div>
                    {/* Remember Me and Forgot Password Links */}
                    <div className="flex items-center justify-between mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox text-blue-500 focus:ring-2 focus:ring-blue-400"
                            />
                            <span className="ml-2 text-gray-700">Remember Me</span>
                        </label>
                        <a
                            href="#"
                            className="text-blue-500 hover:underline text-sm font-medium"
                        >
                            Forgot Password?
                        </a>
                    </div>
                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>

    );
};

export default LoginPage;
