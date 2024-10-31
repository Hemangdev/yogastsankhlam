/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'

const EnquireNow = () => {
    return (
        <>
            <div className='max-w-[1540px] mx-auto p-4 bg-[#63948b]'>
                <div className='flex flex-col w-full gap-3 justify-start items-start  md:flex-row md:justify-between '>
                    <p className='text-white font-bold text-[20px] md:text-[35px]'>Elevate Your Mind, Body & Spirit with Yogastsankhlam</p>

                    <button type="button" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="px-2 py-2 md:px-4 md:py-2 rounded-sm bg-white text-[#63948b] font-semibold text-[10px] md:text-[20px]">
                        EXPLORE MORE
                    </button>
                </div>
            </div>


            {/* Popup modal */}

            {/* 
            <!-- Modal toggle --> */}
            {/* <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Toggle modal
            </button> */}

            {/* <!-- Main modal --> */}
            <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="hidden fixed inset-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto">
                <div class="relative p-4 w-full max-w-md h-auto">
                    {/* <!-- Modal content --> */}
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                Request a Callback!
                            </h3>
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div class="p-4">
                            <form class="space-y-4">
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Age</label>
                                    <input type="text" name="age" id="age" placeholder="Ex: 21yr" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>
                                <div>
                                    <label for="profession" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Profession</label>
                                    <input type="text" name="profession" id="profession" placeholder="Ex: Private Employee" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>
                                <div>
                                    <label for="mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Mobile No.</label>
                                    <input type="tel" name="mobile" id="mobile" placeholder="+91 897854##" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                </div>
                                <button type="submit" class="w-full text-white bg-[#63948b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default EnquireNow