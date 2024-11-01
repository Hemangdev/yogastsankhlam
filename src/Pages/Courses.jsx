/* eslint-disable no-unused-vars */
import React from 'react'
import ComingSoon from '../assets/coming-soon.png'
import Breadcrumb from '../Components/Breadcrumb';

const Courses = () => {

    const breadcrumbPaths = [
        { href: '/', label: 'Home' },
        { href : '/our-courses' , label :'Courses'}
        
        
    ];
    return (
        <>
            <div className='max-w-[1540px] mx-auto p-4 h-[80vh]'>
            <Breadcrumb paths={breadcrumbPaths} />
                <img className='mt-[50px] rounded-2xl' src={ComingSoon} alt="coming-soon" />

                <div className='mt-[50px]'>
                    <h1 className='text-[32px] font-bold text-center'>We are Launching our Courses Soon...</h1>
                    <p className='text-center text-[16px] mt-[20px]'>Secure your spot in advance to avoid last-minute stress, ensuring a smooth and organized experience when the big day arrives.</p>
                    <div className='flex items-center justify-center mt-[50px]'>
                        <button className="px-4 py-2 bg-[#705f5b] text-white text-[16px] rounded-sm">Notify Me</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Courses