/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"; 
import banner1 from '../assets/6.jpg'
import banner2 from '../assets/1.jpg'
import banner3 from '../assets/2.jpg'
import banner4 from '../assets/3.jpg'
import banner5 from '../assets/4.jpg'
import banner6 from '../assets/5.jpg'
import AboutImg from '../assets/about-us.png'
import { motion } from 'framer-motion';
import EnquireNow from '../Components/EnquireNow';
import Mudras from '../Components/Mudras';
import InstaFollow from '../Components/InstaFollow';


// Dummy banner images
const bannerImages = [
     banner1,banner2,banner3,banner4,banner5,banner6
];

const Home = () => {

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
        },
    };
    return (
        <>

            <div className='max-w-[1540px] mx-auto mt-[50px]'>

                <div className="relative w-full">
                    {/* Swiper Slider */}
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation={{
                            prevEl: ".custom-prev",
                            nextEl: ".custom-next",
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000 }}
                        loop
                        className="w-full"
                    >
                        {bannerImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    style={{ filter: "brightness(50%)" }}
                                    className="max-w-[100%] w-full h-auto object-cover"
                                    src={image}
                                    alt={`Banner ${index + 1}`}
                                />
                            </SwiperSlide>
                        ))}

                        {/* Custom Navigation Buttons */}
                        {/* <div className="custom-prev">
                            <FaArrowCircleLeft />
                        </div>
                        <div className="custom-next">
                            <FaArrowCircleRight />
                        </div> */}
                    </Swiper>

                    {/* Text Content */}
                </div>

                {/*About Us Div  */}

                <motion.div initial="hidden" animate="visible" variants={fadeUpVariants}>
                    <div className="flex flex-col items-center w-full md:flex-row my-5 p-4 space-y-4 md:space-y-0 md:space-x-8">
                        {/* Text Section */}
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h2 className="text-[28px] md:text-[48px] lg:text-[60px] font-bold text-[#3D211A] leading-[1.2]">
                                About Us
                            </h2>
                            <p className="text-[#725C4C] text-[14px] md:text-[18px] lg:text-[20px] leading-[1.5] md:leading-[1.8]">
                                Yogastsankhlam is a premier studio dedicated to the art of yoga and
                                meditation. We offer a holistic approach to sharpening your yoga
                                practice through carefully curated sessions that blend traditional
                                techniques with modern insights.
                            </p>
                            <div className="mt-[20px]">
                                <button className="px-4 py-2 rounded-sm bg-[#cbb799] text-white font-semibold text-[14px] md:text-[16px] lg:text-[20px]">
                                    EXPLORE MORE
                                </button>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <img
                                className="w-full h-auto max-w-[400px] md:max-w-full rounded-md object-cover"
                                style={{ filter: "brightness(50%)" }}
                                src={AboutImg}
                                alt="About Us"
                            />
                        </div>
                    </div>
                </motion.div>



                <div>
                    <EnquireNow />
                </div>


                <div className='my-5'>
                    <h3 className='text-[32px] md:text-[60px] font-bold text-[#3D211A] text-center'>Popular Yog Mudras</h3>

                    <div className='w-full flex flex-col items-center justify-center gap-3 mt-[30px] md:flex-row'>
                        <Mudras />
                    </div>
                </div>

                <div>
                    <EnquireNow />
                </div>

                {/* Book a Training Session */}
                <div className="flex flex-col items-center w-full md:flex-row my-5 p-4 space-y-4 md:space-y-0 md:space-x-8">
                    {/* Text Section */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-[28px] md:text-[48px] lg:text-[60px] font-bold text-[#3D211A] leading-[1.2]">
                            Training Session
                        </h2>
                        <p className="text-[#725C4C] text-[14px] md:text-[18px] lg:text-[20px] leading-[1.5] md:leading-[1.8]">
                            Yogastsankhlam is the best studio for yoga and meditation. Sharpen your
                            yoga practice with Astsankhlam.
                        </p>
                        <div className="mt-[20px]">
                            <button
                                type="button"
                                data-modal-target="authentication-modal-2"
                                data-modal-toggle="authentication-modal-2"
                                className="px-4 py-2 rounded-sm bg-[#cbb799] text-white font-semibold text-[14px] md:text-[16px] lg:text-[20px]"
                            >
                                BOOK A DEMO
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            className="w-full h-auto max-w-[400px] md:max-w-full rounded-md object-cover"
                            style={{ filter: "brightness(50%)" }}
                            src={AboutImg}
                            alt="Training Session"
                        />
                    </div>
                </div>

                {/* <!-- Main modal --> */}
                <div id="authentication-modal-2" tabindex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full max-w-md max-h-full">
                        {/* <!-- Modal content --> */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Book Your Demo Slot Now!
                                </h3>
                                <button type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <div className="p-4 md:p-5">
                                <form className="space-y-4" action="#">
                                    <div>
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                    </div>
                                    <div>
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Age</label>
                                        <input type="password" name="password" id="password" placeholder="Ex:21yr" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div>
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Profession</label>
                                        <input type="password" name="password" id="password" placeholder="Ex:Private Employee" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>
                                    <div>
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Mobile No.</label>
                                        <input type="password" name="password" id="password" placeholder="+91 897854##" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                    </div>

                                    <button type="submit" className="w-full text-white bg-[#cbb799]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Book Now</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='my-5'>
                    <div className='w-full text-center py-5 bg-[#705f5b]'>
                        <h5 className='text-white font-bold text-[25px] md:text-[60px]'>Follow us on Instagram</h5>
                        <span className='text-white font-semibold'>@yog_astsankhlam</span>
                    </div>

                    <div className='mt-5'>
                        <InstaFollow />
                    </div>

                </div>

            </div>

        </>
    )
}

export default Home