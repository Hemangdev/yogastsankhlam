 
/* eslint-disable no-unused-vars */
import React from 'react'
import Breadcrumb from '../Components/Breadcrumb';
import { FaXTwitter } from "react-icons/fa6";
import { SiLivechat } from "react-icons/si";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";

const Contact = () => {

    const breadcrumbPaths = [
        { href: '/', label: 'Home' },
        { href: '/contact', label: 'Contact-Us' }
    ];
    return (
        <>
            <div className='max-w-[1540px] mx-auto p-4 mt-[70px]'>
                <Breadcrumb paths={breadcrumbPaths} />
                <div className='topDiv'>
                    <h1 className=' text-left md:text-center font-bold text-[32px] md:text-[48px] text-[#3d111a]'>Feel Free To Reach Out!</h1>
                    <p className=' font-extralight text-[15px] md:text-[20px] md:text-center'>We’re here to help and would love to hear from you! Whether you have questions about our services, need assistance with your account, or just want to provide feedback, our team is ready to assist.</p>
                </div>

                <div className='2ndDiv flex flex-col md:flex-row justify-center items-center gap-4 mt-[30px]'>

                    <div className='formDiv'>
                        <div className="  rounded-md">
                            <form className="space-y-4">

                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-gray-700">First name</label>
                                        <input type="text" placeholder="First name" className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-gray-500" />
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-gray-700">Last name</label>
                                        <input type="text" placeholder="Last name" className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-gray-500" />
                                    </div>
                                </div>

                                {/* <!-- Email Field --> */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" placeholder="you@company.com" className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-gray-500" />
                                </div>

                                {/* <!-- Phone Number Field --> */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Phone number</label>
                                    <div className="flex">
                                        <select className="border border-gray-300 rounded-l-md p-2 focus:outline-none focus:border-gray-500">
                                            <option>US</option>
                                            {/* <!-- Add other countries if needed --> */}
                                        </select>
                                        <input type="text" placeholder="+1 (555) 000-0000" className="w-full border border-l-0 border-gray-300 rounded-r-md p-2 focus:outline-none focus:border-gray-500" />
                                    </div>
                                </div>

                                {/* <!-- Message Field --> */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea placeholder="Leave us a message..." className="w-full border border-gray-300 rounded-md p-2 mt-1 h-24 focus:outline-none focus:border-gray-500"></textarea>
                                </div>

                                {/* <!-- Services Checkboxes --> */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Services</label>
                                    <div className="grid grid-cols-2 gap-2 mt-1">
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-700 rounded focus:ring-gray-500" />
                                            <span className="ml-2 text-gray-700">Website design</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-700 rounded focus:ring-gray-500" />
                                            <span className="ml-2 text-gray-700">Content creation</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-700 rounded focus:ring-gray-500" />
                                            <span className="ml-2 text-gray-700">UX design</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-700 rounded focus:ring-gray-500" />
                                            <span className="ml-2 text-gray-700">Strategy & consulting</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-700 rounded focus:ring-gray-500" />
                                            <span className="ml-2 text-gray-700">User research</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-700 rounded focus:ring-gray-500" />
                                            <span className="ml-2 text-gray-700">Other</span>
                                        </label>
                                    </div>
                                </div>

                                {/* <!-- Submit Button --> */}
                                <div>
                                    <button className="w-full bg-[#705f5b] text-white font-medium py-2 rounded-md   focus:outline-none  ">Send message</button>
                                </div>
                            </form>
                        </div>

                    </div>

                    {/* another div */}

                    <div className="space-y-8">
                        {/* <!-- Chat with us Section --> */}
                        <div className="space-y-2">
                            <h2 className="text-lg font-semibold">Chat with us</h2>
                            <p className="text-gray-600">Speak to our friendly team via live chat.</p>
                            <ul className="space-y-1">
                                <li>
                                    <a href="#" className="flex items-center   hover:underline">
                                         <SiLivechat className="mr-[5px]"/>
                                        Start a live chat
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:support@example.com" className="flex items-center   hover:underline">
                                    <MdMarkEmailUnread className="mr-[5px]"/>
                                        Shoot us an email
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center   hover:underline">
                                    <FaXTwitter className="mr-[5px]"/>
                                        Message us on X
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* <!-- Call us Section --> */}
                        <div className="space-y-2">
                            <h2 className="text-lg font-semibold">Call us</h2>
                            <p className="text-gray-600">Call our team Mon-Fri from 8am to 5pm.</p>
                            <a href="tel:+15550000000" className="flex items-center hover:underline">
                            <FaSquarePhone className="mr-[5px]"/>
                                +1 (555) 000-0000
                            </a>
                        </div>

                        {/* <!-- Visit us Section --> */}
                        <div className="space-y-2">
                            <h2 className="text-lg font-semibold">Visit us</h2>
                            <p className="text-gray-600">Chat to us in person at our Melbourne HQ.</p>
                            <a href="https://maps.google.com" target="_blank" className="flex items-center  hover:underline">
                            <FaLocationDot className="mr-[5px]"/>
                                100 Smith Street, Collingwood VIC 3066
                            </a>
                        </div>
                    </div>




                </div>
            </div>


        </>
    )
}

export default Contact