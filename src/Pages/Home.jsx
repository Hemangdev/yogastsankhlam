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

            <div className='max-w-[1540px] mx-auto'>

                <div className="relative w-full">
                    {/* Background Image */}
                    <img
                        style={{ filter: 'brightness(50%)' }}
                        className="max-w-[100%] w-full"
                        src={banner}
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
                        <div>
                            <h2 className='text-[32px] font-bold text-[#3D211A]'>About Us</h2>
                            <p style={{ lineHeight: '30px' }} className='text-[#725C4C]'>Yogastsankhlam is a premier studio dedicated to the art of yoga and meditation. We offer a holistic approach to sharpening your yoga practice through carefully curated sessions that blend traditional techniques with modern insights.</p>
                            <div className='mt-[20px]'>
                                <button className="px-2 py-2 md:px-4 md:py-2 rounded-sm bg-[#cbb799] text-white font-semibold text-[10px] md:text-[20px]">
                                    EXPLORE MORE
                                </button>
                            </div>
                        </div>
                        {/* Img Div */}
                        <div className='mt-4'>
                            <img style={{ filter: 'brightness(50%)' }} src={AboutImg} alt="" />
                        </div>

                    </div>
                </motion.div>


                <div>
                    <EnquireNow />
                </div>


                <div className='my-5'>
                    <h3 className='text-[32px] font-bold text-[#3D211A] text-center'>Popular Yog Mudras</h3>

                    <div className='w-full flex flex-col items-center justify-center gap-3 mt-[30px]'>
                        <Mudras />
                    </div>
                </div>

                <div>
                    <EnquireNow />
                </div>

                {/* Book a Training Session */}
                <div className='flex flex-col w-full items-center md:flex-row my-5 p-4'>
                    <div>
                        <h2 className='text-[32px] font-bold text-[#3D211A]'>Traning Session</h2>
                        <p style={{ lineHeight: '30px' }} className='text-[#725C4C]'>Yogastsankhlam is the best studio of the yoga
                            and meditation, sharp your yoga with
                            astsankhlam</p>
                        <div className='mt-[20px]'>
                            <button className="px-2 py-2 md:px-4 md:py-2 rounded-sm bg-[#cbb799] text-white font-semibold text-[10px] md:text-[20px]">
                                BOOK A DEMO
                            </button>
                        </div>
                    </div>
                    {/* Img Div */}
                    <div className='mt-4'>
                        <img style={{ filter: 'brightness(50%)' }} src={AboutImg} alt="" />
                    </div>

                </div>

            </div>

        </>
    )
}

export default Home