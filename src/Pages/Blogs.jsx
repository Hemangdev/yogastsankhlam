
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Breadcrumb from '../Components/Breadcrumb';
import { Link } from 'react-router-dom';


// const tempBlogsData = [
//     {
//         id: 1,
//         title: 'Sophia Mesabhi on Profitable and Sustainable Growth',
//         desc: 'Sophia Mesabhi is a Senior Partner at Untitled Ventures. Frankie Sullivan sat down with her to chat about sustainable and profitable growth...',
//         img: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=600',
//         createdAt: '01 November 2024',
//         author: 'Dipanita Biswas',
//         redirectTo: '/blog-details'

//     },
//     {
//         id: 2,
//         title: 'Sophia Mesabhi on Profitable and Sustainable Growth',
//         desc: 'Sophia Mesabhi is a Senior Partner at Untitled Ventures. Frankie Sullivan sat down with her to chat about sustainable and profitable growth...',
//         img: 'https://images.pexels.com/photos/806427/pexels-photo-806427.jpeg?auto=compress&cs=tinysrgb&w=600',
//         createdAt: '01 November 2024',
//         author: 'Dipanita Biswas',
//         redirectTo: '/blog-details'

//     },
//     {
//         id: 3,
//         title: 'Sophia Mesabhi on Profitable and Sustainable Growth',
//         desc: 'Sophia Mesabhi is a Senior Partner at Untitled Ventures. Frankie Sullivan sat down with her to chat about sustainable and profitable growth...',
//         img: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600',
//         createdAt: '01 November 2024',
//         author: 'Dipanita Biswas',
//         redirectTo: '/blog-details'

//     },
// ]




const Blogs = ({ tempBlogsData }) => {

    const breadcrumbPaths = [
        { href: '/', label: 'Home' },
        { href: '/blogs', label: 'Blogs' },
    ];
    return (
        <>


            <div className='max-w-[1540px] mx-auto p-4 mt-[70px]'>
                <Breadcrumb paths={breadcrumbPaths} />

                <div className='mainCategoryHead'>
                    <h1 className='text-[32px] md:text-[48px] font-bold text-[#63948b]'>Empowering Minds for Better Wellbeing</h1>
                    <p className=' md:text-[24px]'>The Untitled UI Journal features carefully selected good works from studios, designers, architects, photographers, and creators from all around the globe. Subscribe for new posts in your inbox.</p>
                </div>


                {/* Blog listing Comes here */}

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 md:w-2/3">
                        {
                            tempBlogsData.map((item, index) => (
                                <Link to={`/blogs/${item.id}`} key={item.id}>
                                    <BlogBody
                                        key={item.id}
                                        title={item.title}
                                        img={item.img}
                                        desc={item.desc}
                                        createdAt={item.createdAt}
                                        author={item.author}
                                        redirect={item.redirectTo}
                                    />
                                </Link>
                            ))
                        }
                    </div>

                    <div className="md:w-1/3 bg-gray-100 p-4 rounded-md shadow-md my-5">
                        <h3 className="text-lg font-semibold">Recent Posts</h3>
                        <ul>
                            {tempBlogsData.slice(0, 5).map((item, index) => (
                                <li key={index} className="mt-2">
                                    <Link to={`/blogs/${item.id}`} className="text-blue-500 hover:underline">
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Blogs


const BlogBody = ({ title, img, createdAt, author, desc, redirect }) => {

    return (
        <>
            {/* New Blog Body */}
            <div className="max-w-lg w-full lg:max-w-full lg:flex my-5">
                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: "url('https://placehold.co/48x48')" }} title="Woman holding a mug">
                </div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-8">
                        <p className="text-sm text-gray-600 flex items-center">
                            <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                            </svg>
                            Members only
                        </p>
                        <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
                        <p className="text-gray-700 text-base">{desc}</p>
                    </div>
                    <div className="flex items-center">
                        <img className="w-10 h-10 rounded-full mr-4" src="https://placehold.co/10x10" alt="Avatar of Jonathan Reinink" />
                        <div className="text-sm">
                            <p className="text-gray-900 leading-none">{author}</p>
                            <p className="text-gray-600">{createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='w-full my-[30px]'>
                <img className='rounded-t-2xl' src={img} alt="" />
                <h1 className='text-[23px] text-[#3D211A] font-semibold leading-[35px]'>{title}</h1>
                <p className='text-[14px] font-extralight'>{desc}</p>
                <div className='w-full flex items-center mt-3'>
                    <div className='flex items-center gap-2'>
                        <img className='w-[20px] h-[20px] rounded-[50px]' src="https://images.pexels.com/photos/29090261/pexels-photo-29090261/free-photo-of-young-woman-reading-in-a-cozy-hanoi-cafe.jpeg?auto=compress&cs=tinysrgb&w=600" alt="author-img" />
                        <h1 className='text-[#3D211A] text-[16px] font-bold'>{author}</h1>
                    </div>

                    <span className='font-bold mx-2'>.</span>
                    <p className='text-[#3D211A] text-[16px] font-bold'>{createdAt}</p>
                </div>
            </div> */}

        </>
    )
}