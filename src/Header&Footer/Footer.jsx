/* eslint-disable no-unused-vars */
import React from 'react'
import OurLogo from '../assets/final-updated-logo.png'

const Footer = () => {
  return (
    <>
      <div className='max-w-[1540px] mx-auto bg-[#cbb799]'>

        <footer className=" rounded-lg  dark:bg-gray-900">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#3D211A]">Yogastsankhlam</span>

              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6 text-[#3D211A] font-bold">About</a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6 text-[#3D211A] font-bold">Courses</a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6 text-[#3D211A] font-bold">Gallery</a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-[#3D211A] font-bold">Contact</a>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-[#3D211A] sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">Yogastsankhlam™</a>. All Rights Reserved.</span>
          </div>
        </footer>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center my-2 p-2">
        <span className=''>Developed by MANHEM Digital Solutions Pvt. Ltd.</span>
        <img className='w-[2rem] md:w-[2rem] lg:w-[2rem] mx-2 my-2' src={OurLogo} alt="" />

      </div>




    </>
  )
}

export default Footer