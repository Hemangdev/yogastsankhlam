/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi'; // Import the hamburger icon
import { AiOutlineClose } from 'react-icons/ai'; // Optional close icon
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const Header = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-10 transition-all duration-300  ${isScrolled ? "bg-[#100f0f]" : "bg-transparent"}`}
        >
            <div className="max-w-[1540px] mx-auto px-2">
                <div className="flex items-center justify-between lg:justify-center relative">
                    {/* Links Section (Left) */}
                    <div className="hidden lg:flex absolute left-0">
                        <ul className="flex items-center gap-6 md:gap-8">
                            <Link to={'/'}>
                                <li className="text-white hover:text-[#705f5b]">Home</li>
                            </Link>
                            <Link to={'/about-us'}>
                                <li className="text-white hover:text-[#705f5b]">About Us</li>
                            </Link>
                            <Link to={'/our-courses'}>
                                <li className="text-white hover:text-[#705f5b]">Courses</li>
                            </Link>
                            <Link to={'/blogs'}>
                                <li className="text-white hover:text-[#705f5b]">Blogs</li>
                            </Link>
                            <Link to={'/contact'}>
                                <li className="text-white hover:text-[#705f5b]">Contact</li>
                            </Link>
                            <Link to={'/our-gallery'}>
                                <li className="text-white hover:text-[#705f5b]">Gallery</li>
                            </Link>
                        </ul>
                    </div>

                    {/* Logo Section (Centered) */}
                    <div className="logo-div flex justify-center">
                        <h1 className="text-black uppercase font-bold">
                            <a href="/">
                                <img className='w-[30%] lg:m-auto' src={Logo} alt="Logo" />
                            </a>
                        </h1>
                    </div>

                    {/* Contact Button (Right) */}
                    <div className="hidden lg:block absolute right-0">
                        <Link to={'/membership'}>
                            <button className=" rounded-md px-4 py-2 bg-[#705f5b] text-white text-[14px] md:text-[16px]">
                                Contact Us
                            </button>
                        </Link>
                        <Link className='mx-2' to={'/membership'}>
                            <button className=" rounded-md px-4 py-2 bg-transparent border-2 border-[#705f5b] text-white text-[14px] md:text-[16px]">
                                Get a Free Trial
                            </button>
                        </Link>
                    </div>

                    {/* Hamburger Menu for Mobile and Tablet */}
                    <div className="lg:hidden">
                        <FiMenu color='#fefde1' size={45} onClick={toggleDrawer} className="cursor-pointer" />
                    </div>
                </div>

                {/* Mobile and Tablet Drawer */}
                <div
                    className={`fixed top-0 right-0 h-full w-[75%] bg-[#fff7eb] z-[9] shadow-lg transform transition-transform duration-300 ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="p-4 flex justify-between items-center">
                        <h2 className="text-black font-bold">Yogastsankhlam</h2>
                        <AiOutlineClose size={24} onClick={toggleDrawer} className="cursor-pointer" />
                    </div>
                    <ul className="p-4 space-y-6 text-black">
                        <li onClick={toggleDrawer}><a href="/">Home</a></li>
                        <li onClick={toggleDrawer}><a href="/about-us">About Us</a></li>
                        <li onClick={toggleDrawer}><a href="/our-courses">Courses</a></li>
                        <li onClick={toggleDrawer}><a href="/blogs">Blogs</a></li>
                        <li onClick={toggleDrawer}><a href="/contact">Contact</a></li>
                        <li onClick={toggleDrawer}><a href="/our-gallery">Gallery</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Header