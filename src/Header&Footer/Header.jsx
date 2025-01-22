/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'; // Import the hamburger icon
import { AiOutlineClose } from 'react-icons/ai'; // Optional close icon
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const Header = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    return (
        <>
            <div className="fixed top-0 left-0 w-full z-10 bg-[#fff7eb] shadow-md">
                <div className="max-w-[1540px] mx-auto p-4">
                    <div className="flex items-center justify-between">
                        {/* Logo Section */}
                        <div className="logo-div">
                            <h1 className="text-black uppercase font-bold">
                                <a href="/">Yogastsankhlam.</a>
                            </h1>
                        </div>

                        {/* Desktop and Tablet Menu */}
                        <div className="hidden lg:flex">
                            <ul className="flex items-center gap-6 md:gap-8">
                                <Link to={'/'}>
                                    <li className="text-black hover:text-[#705f5b]">Home</li>
                                </Link>
                                <Link to={'/about-us'}>
                                    <li className="text-black hover:text-[#705f5b]">About Us</li>
                                </Link>
                                <Link to={'/our-courses'}>
                                    <li className="text-black hover:text-[#705f5b]">Courses</li>
                                </Link>
                                <Link to={'/blogs'}>
                                    <li className="text-black hover:text-[#705f5b]">Blogs</li>
                                </Link>
                                <Link to={'/contact'}>
                                    <li className="text-black hover:text-[#705f5b]">Contact</li>
                                </Link>
                                <li className="text-black hover:text-[#705f5b]">Gallery</li>
                            </ul>
                        </div>

                        {/* Contact Button for Tablet and Desktop */}
                        <div className="hidden lg:block">
                            <button className="px-4 py-2 bg-[#705f5b] text-white text-[14px] md:text-[16px] rounded-sm">
                                Contact Us
                            </button>
                        </div>

                        {/* Hamburger Menu for Mobile and Tablet */}
                        <div className="lg:hidden">
                            <FiMenu size={28} onClick={toggleDrawer} className="cursor-pointer" />
                        </div>
                    </div>

                    {/* Mobile and Tablet Drawer */}
                    <div
                        className={`fixed top-0 right-0 h-full w-[75%] bg-[#fff7eb] z-[9] shadow-lg transform transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        <div className="p-4 flex justify-between items-center">
                            <h2 className="text-black font-bold">Yogastsankhlam</h2>
                            <AiOutlineClose
                                size={24}
                                onClick={toggleDrawer}
                                className="cursor-pointer"
                            />
                        </div>
                        <ul className="p-4 space-y-6 text-black">
                            <li onClick={toggleDrawer}><a href="/">Home</a></li>
                            <li onClick={toggleDrawer}><a href="/about-us">About Us</a></li>
                            <li onClick={toggleDrawer}><a href="/our-courses">Courses</a></li>
                            <li onClick={toggleDrawer}><a href="/blogs">Blogs</a></li>
                            <li onClick={toggleDrawer}><a href="/contact">Contact</a></li>
                            <li onClick={toggleDrawer}>Gallery</li>
                        </ul>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Header