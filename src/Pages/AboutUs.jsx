/* eslint-disable no-unused-vars */
import React from 'react'
import About from '../assets/about-us.jpg'
import { motion } from 'framer-motion';
import About1 from '../assets/about-1.jpg'
import About2 from '../assets/about-2.jpg'
import StickySocialLinks from '../Components/StickySocialLinks';
import FollowCta from '../Components/FollowCta';



const AboutUs = () => {
    return (
        <>
            <div className='max-w-[1540px] mx-auto mt-[50px]'>
                <div className="relative w-full">
                    <div className="absolute top-[60px] left-[10px] sm:top-[310px] lg:top-[450px]">
                        <FollowCta />
                    </div>


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

                        <p className="mt-2 text-[12px] md:text-[20px] text-white font-light px-5">
                            At Yogastsankhlam, we offer a transformative yoga and meditation experience tailored to your unique needs. Whether you're a beginner or experienced practitioner, our expert instructors guide you towards balance, mindfulness, and overall well-being in a welcoming space.
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
                            Our Mentor: Dipanita Biswas
                        </h1>
                        <p className="mt-2 text-sm md:text-base">
                            Dipanita Biswas is a passionate and experienced yoga and meditation instructor, dedicated to guiding individuals on their journey to physical, mental, and spiritual wellness. With years of experience, Dipanita combines traditional yoga techniques with modern insights to help students cultivate mindfulness, self-awareness, and a deeper connection to themselves.
                        </p>
                        <p className="mt-4 text-sm md:text-base">
                            Her personalized approach ensures that every student, whether a beginner or advanced practitioner, feels supported and empowered throughout their practice. Dipanita’s teaching philosophy centers on the belief that yoga is not just a workout, but a transformative experience that nurtures both the body and the mind.
                        </p>

                        <a href="/membership">
                            <button className="mt-6 px-4 py-2 rounded-sm bg-[#63948b] text-white font-semibold text-[14px] md:text-[20px]">
                                GET IN TOUCH
                            </button>
                        </a>
                    </div>


                    <div className="mt-6 md:mt-0">
                        <img className="rounded-2xl max-w-full" src={About1} alt="Mentor Image" />
                    </div>

                </div>


                {/* 3rd Div */}
                <div className='bg-[#ab9882] p-4 my-4'>
                    <h1 className='text-[22px] font-bold text-white text-center'>About Astsankhlam Journey</h1>
                    <p className='text-white font-extralight mt-5'>Yogastsankhlam’s journey began with a simple yet powerful vision: to create a space where people can deepen their practice of yoga and meditation, while embracing holistic well-being.</p>

                    <p className='text-white font-extralight'>Since its inception, the studio has flourished, growing into a welcoming community that encourages personal growth, mindfulness, and wellness. Through dedication and a commitment to quality teaching, we have become a trusted space for individuals seeking a transformative experience.</p>
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
                            At Yogastsankhlam, we are a dedicated team of yoga instructors, meditation guides, and wellness experts committed to providing a holistic and transformative experience for each of our students. We aim to create a safe, welcoming environment where people of all backgrounds and experience levels can explore and deepen their yoga practice.
                        </p>
                        <p className="mt-4 text-sm md:text-base">
                            Our mission is to help individuals reconnect with their inner selves, achieve a state of balance, and cultivate peace through mindful movement and meditation. Whether you're looking to relieve stress, improve flexibility, or enhance your spiritual well-being, we are here to support you every step of the way.
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
                            Are you ready to start your yoga and meditation journey? At Yogastsankhlam, we offer a Free Trial session for you to experience firsthand what we have to offer. Our classes are designed to help you find balance, gain strength, and enhance your overall well-being, no matter where you are on your journey. Book your free trial today, and let us guide you toward a more mindful and fulfilling life.
                        </p>
                        <p className="mt-2 text-sm md:text-base">
                            At Yogastsankhlam, we understand that starting something new can feel intimidating, but we believe that everyone deserves the opportunity to explore yoga and meditation in a supportive, non-judgmental environment. Our experienced instructors are here to help you build confidence and comfort as you discover the many benefits of these practices. Whether you’re looking to reduce stress, improve flexibility, or simply find a moment of calm in your day, our free trial session is the perfect way to begin.
                        </p>
                        <p className="mt-2 text-sm md:text-base">
                            We are committed to making your experience with us as rewarding and enjoyable as possible. During your free trial, you’ll have the chance to try different styles of yoga, including Vinyasa, Hatha, and restorative practices, all tailored to suit your individual needs. Our goal is to provide you with the tools and guidance to enhance your physical, mental, and emotional well-being. Come join us at Yogastsankhlam, where your journey to wellness and mindfulness begins. Book your free trial session today and take the first step towards a healthier, more balanced life.
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
                    <a href="https://www.instagram.com/yog_astsankhlam/">
                        <div className='w-full text-center py-5 bg-[#705f5b]'>
                            <h5 className='text-white font-bold text-[25px] md:text-[60px]'>Follow us on Instagram</h5>
                            <span className='text-white font-semibold'>@yog_astsankhlam</span>
                        </div>
                    </a>

                </div>




            </div>
        </>
    )
}

export default AboutUs