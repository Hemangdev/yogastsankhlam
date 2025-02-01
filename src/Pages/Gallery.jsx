/* eslint-disable no-unused-vars */
import React from 'react'
import About from '../assets/about-us.jpg'
import banner1 from '../assets/6.jpg'
import banner2 from '../assets/1.jpg'
import banner3 from '../assets/2.jpg'
import banner4 from '../assets/3.jpg'
import banner5 from '../assets/4.jpg'
import banner6 from '../assets/5.jpg'

const images = [
    banner1,banner2,banner3,banner4,banner5,banner6
];

const Gallery = () => {
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
                            Yoga Gallery
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

                <div className='gallery-div'>

                    <div className="gallery-div grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                        {images.map((image, index) => (
                            <div key={index} className="w-full h-0 pb-[56.25%] bg-gray-300">
                                <img className="object-cover w-full h-full" src={image} alt={`Image ${index + 1}`} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </>
    )
}

export default Gallery