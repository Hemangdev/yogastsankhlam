/* eslint-disable no-unused-vars */
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import banner from '../assets/banner.png'

const Home = () => {
    return (
        <>

            <div className='max-w-[1540px] mx-auto'>

                <div className='relative w-full'>
                    <img style={{filter:'brightness(50%)'}} className='max-w-[100%] w-full' src={banner} alt="" />

                    <div className='absolute top-[25px] md:top-[150px] right-0 w-[47%]'>
                        <h1 className='text-white text-[25px] md:text-[75px] font-extrabold'>YOGA &</h1>
                        <h1 className='text-white text-[25px] md:text-[75px] font-extrabold mt-[-12px]'>MEDITAION</h1>
                        <h1 className='text-white text-[25px] md:text-[75px] font-extrabold mt-[-12px]'>STUDIO</h1>

                        <p className='text-[8px] md:text-[16px] text-white font-extralight'>Yogastsankhlam is the best studio of the yoga and meditation,
                            sharp your yoga with astsankhlam</p>

                        <div className='mt-[16px] md:mt-[30px]'>
                            <button className='px-2 py-1 md:px-4 md:py-2  rounded-sm bg-[#63948b] text-white font-semibold text-[10px] md:text-[20px]'>GET STARTED</button>
                        </div>


                    </div>

                </div>

            </div>

        </>
    )
}

export default Home