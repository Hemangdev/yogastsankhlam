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
                    <div className='h-[60%]'>

                        <img

                            className="max-w-[100%] w-full"
                            src={About}
                            alt=""
                        />
                    </div>
                    {/* <div className='absolute top-0'>
                        <StickySocialLinks /> 
                    </div> */}

                    {/* Text Content */}
                    <motion.div
                        className="absolute top-[50%] md:top-[200px] right-0 w-[47%]"
                        initial="hidden"
                        animate="visible"
                        variants={fadeUpVariants}
                    >
                        <h1 className="text-white text-[25px] md:text-[75px] font-extrabold">
                            ABOUT US
                        </h1>



                        <p className="text-[8px] md:text-[30px] text-white font-extralight">
                            Yogastsankhlam is the best studio of the yoga and meditation,
                            sharp your yoga with astsankhlam
                            Yogastsankhlam is the best studio of the yoga and meditation,
                            sharp your yoga with astsankhlam
                        </p>

                        {/* <div className="mt-[16px] md:mt-[30px]">
                            <button className="px-2 py-1 md:px-4 md:py-2 rounded-sm bg-[#63948b] text-white font-semibold text-[10px] md:text-[20px]">
                                GET STARTED
                            </button>
                        </div> */}
                    </motion.div>
                </div>


                {/* 2nd Div */}

                <div className='w-full p-4 flex flex-col md:flex-row'>

                    <div>
                        <h1 className='text-[42px] font-bold text-[#795f4e]'>Our Mentor...</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                        <button className="px-2 py-1 md:px-4 md:py-2 rounded-sm bg-[#63948b] text-white font-semibold text-[10px] md:text-[20px] my-4">
                            GET STARTED
                        </button>
                    </div>

                    <div className='img-div'>
                        <img className='rounded-2xl' src={About1} alt="" />
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
                <div className='w-full p-4 flex flex-col md:flex-row'>

                    <div className='img-div'>
                        <img className='rounded-2xl' src={About2} alt="" />
                    </div>

                    <div>
                        <h1 className='text-[42px] font-bold text-[#795f4e]'>Who We Are ?</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                {/* 5th Div */}
                <div className='w-full p-4 flex flex-col md:flex-row'>
                    <div>
                        <h1 className='text-[42px] font-bold text-[#795f4e]'>Book Your Free Trail....</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>

                <div className='p-4 w-full'>
                    <button className="px-2 py-1 md:px-4 md:py-2 rounded-sm bg-[#63948b] text-white font-semibold text-[10px] md:text-[20px] my-4">
                        GET STARTED
                    </button>
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