/* eslint-disable no-unused-vars */
import React from 'react'
import About from '../assets/about-us.jpg'
import { motion } from 'framer-motion';
import About1 from '../assets/about-1.jpg'
import About2 from '../assets/about-2.jpg'
import StickySocialLinks from '../Components/StickySocialLinks';



const AboutUs = () => {


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
                    <div className="h-[60%]">
                        <img
                            className="max-w-full w-full object-cover"
                            src={About}
                            alt="About Background"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="absolute top-[40%] left-0 right-0 text-center px-4 md:px-12">
                        <h1 className="text-white text-[30px] md:text-[75px] font-extrabold leading-tight">
                            ABOUT US
                        </h1>

                        <p className="mt-2 text-[12px] md:text-[20px] text-white font-light">
                            Yogastsankhlam is the best studio for yoga and meditation. Sharpen your yoga skills with Astsankhlam.
                            Yogastsankhlam is the best studio for yoga and meditation. Sharpen your yoga skills with Astsankhlam.
                        </p>

                        {/* Optional Button Section */}
                        {/* <div className="mt-[16px] md:mt-[30px]">
        <button className="px-2 py-1 md:px-4 md:py-2 rounded-sm bg-[#63948b] text-white font-semibold text-[10px] md:text-[20px]">
            GET STARTED
        </button>
    </div> */}
                    </div>

                </div>



                {/* 2nd Div */}

                <div className="w-full p-4 flex flex-col md:flex-row justify-between items-center md:items-start">


                    <div className="text-center md:text-left">
                        <h1 className="text-[36px] md:text-[42px] font-bold text-[#795f4e]">
                            Our Mentor...
                        </h1>
                        <p className="mt-2 text-sm md:text-base">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <p className="mt-4 text-sm md:text-base">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>


                        <button className="mt-6 px-4 py-2 rounded-sm bg-[#63948b] text-white font-semibold text-[14px] md:text-[20px]">
                            GET STARTED
                        </button>
                    </div>


                    <div className="mt-6 md:mt-0">
                        <img className="rounded-2xl max-w-full" src={About1} alt="Mentor Image" />
                    </div>

                </div>


                {/* 3rd Div */}
                <div className='bg-[#ab9882] p-4'>
                    <h1 className='text-[22px] font-bold text-white text-center'>About Astsankhlam Journey</h1>
                    <p className='text-white font-extralight mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <p className='text-white font-extralight'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <p className=' text-right text-[#795f4e] font-bold text-[10px]'>Read more..</p>
                </div>

                {/* 4th Div */}
                <div className="w-full p-4 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">


                    <div className="w-full md:w-1/2">
                        <img className="rounded-2xl max-w-full h-auto" src={About2} alt="Who We Are" />
                    </div>


                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-[30px] md:text-[42px] font-bold text-[#795f4e]">
                            Who We Are ?
                        </h1>
                        <p className="mt-2 text-sm md:text-base">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <p className="mt-4 text-sm md:text-base">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <p className="mt-4 text-sm md:text-base">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                </div>

                {/* 5th Div */}
                <div className="w-full p-4 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">

                    {/* <!-- Text Section --> */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="text-[30px] md:text-[42px] font-bold text-[#795f4e]">
                            Book Your Free Trial...
                        </h1>
                        <p className="mt-2 text-sm md:text-base">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <p className="mt-4 text-sm md:text-base">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>

                        <button className="px-2 py-1 md:px-4 md:py-2 rounded-sm bg-[#63948b] text-white font-semibold text-[10px] md:text-[20px] my-4">
                            GET STARTED
                        </button>

                    </div>
                    <div className="w-full md:w-1/2">
                        <img className="rounded-2xl max-w-full h-auto" src={About2} alt="Who We Are" />
                    </div>
                </div>


               

                <div className='my-5'>
                    <div className='w-full text-center py-5 bg-[#705f5b]'>
                        <h5 className='text-white font-bold text-[25px] md:text-[60px]'>Follow us on Instagram</h5>
                        <span className='text-white font-semibold'>@yog_astsankhlam</span>
                    </div>
                </div>




            </div>
        </>
    )
}

export default AboutUs