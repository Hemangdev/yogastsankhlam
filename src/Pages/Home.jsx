
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
import { Link } from 'react-router-dom';


// Dummy banner images
const bannerImages = [
    banner1, banner2, banner3, banner4, banner5, banner6
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
                                    style={{ filter: "brightness(80%)" }}
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
                                <a href="/about-us">
                                    <button className="px-4 py-2 rounded-sm bg-[#cbb799] text-white font-semibold text-[14px] md:text-[16px] lg:text-[20px]">
                                        EXPLORE MORE
                                    </button>
                                </a>

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
                            <Link to={'/membership'}>
                                <button
                                    type="button"
                                    data-modal-target="authentication-modal-2"
                                    data-modal-toggle="authentication-modal-2"
                                    className="px-4 py-2 rounded-sm bg-[#cbb799] text-white font-semibold text-[14px] md:text-[16px] lg:text-[20px]"
                                >
                                    BOOK A DEMO
                                </button>
                            </Link>

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




                <div className='my-5'>
                    <a href="https://www.instagram.com/yog_astsankhlam/">
                        <div className='w-full text-center py-5 bg-[#705f5b]'>
                            <h5 className='text-white font-bold text-[25px] md:text-[60px]'>Follow us on Instagram</h5>
                            <span className='text-white font-semibold'>@yog_astsankhlam</span>
                        </div>
                    </a>


                    <div className='mt-5'>
                        <InstaFollow />
                    </div>

                </div>

            </div>

        </>
    )
}

export default Home