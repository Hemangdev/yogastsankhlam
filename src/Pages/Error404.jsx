/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <div className='flex items-center justify-center flex-col w-full h-screen'><h1 className='text-3xl sm:text-3xl md:text-4xl font-semibold text-brown-800'>404, Page Not Found !</h1>
            <Link to={'/'}>
                <button className='px-3 py-2 rounded-md bg-green-400 mt-5'>Back To Home</button>
            </Link> 
        </div>
    )
}

export default Error404