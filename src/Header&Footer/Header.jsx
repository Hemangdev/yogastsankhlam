/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'; // Import the hamburger icon
import { AiOutlineClose } from 'react-icons/ai'; // Optional close icon
import { Link } from 'react-router-dom'

const Header = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    return (
        <>
            <div className="max-w-[1540px] mx-auto p-4 bg-[#fff7eb]">
                <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="logo-div">
                        <h1 className="text-black uppercase font-bold"><a href="/">Yogastsankhlam.</a></h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex">
                        <ul className="flex items-center gap-8">
                            <li>Home</li>
                            <li>About Us</li>
                            <Link to={'/our-courses'}>
                                <li>Courses</li>
                            </Link>
                            <Link to={'/blogs'}>
                                <li >Blogs</li>
                            </Link>

                            <li>Contact</li>
                            <li>Gallery</li>
                        </ul>
                    </div>

                    {/* Contact Button */}
                    <div className="hidden md:block">
                        <button className="px-4 py-2 bg-[#705f5b] text-white text-[16px] rounded-sm">
                            Contact Us
                        </button>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <div className="md:hidden">
                        <FiMenu size={28} onClick={toggleDrawer} className="cursor-pointer" />
                    </div>
                </div>

                {/* Mobile Drawer */}
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
                    <ul className="p-4 space-y-6">
                        <li onClick={toggleDrawer}><a href="/">Home</a></li>
                        <li onClick={toggleDrawer}>About Us</li>
                        <li onClick={toggleDrawer}><a href="/our-courses">Courses</a></li>

                        <li onClick={toggleDrawer}><a href="/blogs">Blogs</a></li>


                        <li onClick={toggleDrawer}>Contact</li>
                        <li onClick={toggleDrawer}>Gallery</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Header