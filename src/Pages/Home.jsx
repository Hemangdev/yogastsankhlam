/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import banner from '../assets/banner.png'
import AboutImg from '../assets/about-us.png'
import { motion } from 'framer-motion';
import EnquireNow from '../Components/EnquireNow';
import Mudras from '../Components/Mudras';
import InstaFollow from '../Components/InstaFollow';

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
                    {/* Background Image */}
                    <img
                        style={{ filter: 'brightness(50%)' }}
                        className="max-w-[100%] w-full"
                        src={"https://placehold.co/1600x900"}
                        alt=""
                    />

                    {/* Text Content */}
                    <motion.div
                        className="absolute top-[25px] md:top-[150px] right-0 w-[47%]"
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariants}
                    >
                        <h1 className="text-white text-[25px] md:text-[75px] font-extrabold">
                            YOGA &
                        </h1>
                        <h1 className="text-white text-[25px] md:text-[75px] font-extrabold mt-[-12px]">
                            MEDITATION
                        </h1>
                        <h1 className="text-white text-[25px] md:text-[75px] font-extrabold mt-[-12px]">
                            STUDIO
                        </h1>

                        <p className="text-[8px] md:text-[16px] text-white font-extralight">
                            Yogastsankhlam is the best studio of the yoga and meditation,
                            sharp your yoga with astsankhlam
                        </p>

                        <div className="mt-[16px] md:mt-[30px]">
                            <button className="px-2 py-1 md:px-4 md:py-2 rounded-sm bg-[#63948b] text-white font-semibold text-[10px] md:text-[20px]">
                                GET STARTED
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/*About Us Div  */}

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUpVariants}
                >

                    <div className='flex flex-col w-full items-center md:flex-row my-5 p-4'>
                        <div className=' md:w-[50%]'>
                            <h2 className='text-[32px] md:text-[60px] font-bold text-[#3D211A]'>About Us</h2>
                            <p   className='text-[#725C4C] md:text-[26px] leading-[30px] md:leading-[50px]'>Yogastsankhlam is a premier studio dedicated to the art of yoga and meditation. We offer a holistic approach to sharpening your yoga practice through carefully curated sessions that blend traditional techniques with modern insights.</p>
                            <div className='mt-[20px]'>
                                <button className="px-2 py-2 md:px-4 md:py-2 rounded-sm bg-[#cbb799] text-white font-semibold text-[10px] md:text-[20px]">
                                    EXPLORE MORE
                                </button>
                            </div>
                        </div>
                        {/* Img Div */}
                        <div className='mt-4'>
                            <img className=' md:ml-[50%]' style={{ filter: 'brightness(50%)' }} src={AboutImg} alt="" />
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
                <div className='flex flex-col w-full items-center md:flex-row my-5 p-4'>
                    <div className='md:w-[50%]'>
                        <h2 className='text-[32px] md:text-[60px] font-bold text-[#3D211A]'>Traning Session</h2>
                        <p className='text-[#725C4C] md:text-[26px] leading-[30px] md:leading-[50px]'>Yogastsankhlam is the best studio of the yoga
                            and meditation, sharp your yoga with
                            astsankhlam</p>
                        <div className='mt-[20px]'>
                            <button type="button" data-modal-target="authentication-modal-2" data-modal-toggle="authentication-modal-2" className="px-2 py-2 md:px-4 md:py-2 rounded-sm bg-[#cbb799] text-white font-semibold text-[10px] md:text-[20px]">
                                BOOK A DEMO
                            </button>
                        </div>
                    </div>
                    {/* Img Div */}
                    <div className='mt-4'>
                        <img className=' md:ml-[50%]' style={{ filter: 'brightness(50%)' }} src={AboutImg} alt="" />
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