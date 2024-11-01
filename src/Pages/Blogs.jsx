
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Breadcrumb from '../Components/Breadcrumb';
import { Link } from 'react-router-dom';


const tempBlogsData = [
    {
        id: 1,
        title: 'Sophia Mesabhi on Profitable and Sustainable Growth',
        desc: 'Sophia Mesabhi is a Senior Partner at Untitled Ventures. Frankie Sullivan sat down with her to chat about sustainable and profitable growth...',
        img: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=600',
        createdAt: '01 November 2024',
        author: 'Dipanita Biswas',
        redirectTo: '/blog-details'

    },
    {
        id: 2,
        title: 'Sophia Mesabhi on Profitable and Sustainable Growth',
        desc: 'Sophia Mesabhi is a Senior Partner at Untitled Ventures. Frankie Sullivan sat down with her to chat about sustainable and profitable growth...',
        img: 'https://images.pexels.com/photos/806427/pexels-photo-806427.jpeg?auto=compress&cs=tinysrgb&w=600',
        createdAt: '01 November 2024',
        author: 'Dipanita Biswas',
        redirectTo: '/blog-details'

    },
    {
        id: 3,
        title: 'Sophia Mesabhi on Profitable and Sustainable Growth',
        desc: 'Sophia Mesabhi is a Senior Partner at Untitled Ventures. Frankie Sullivan sat down with her to chat about sustainable and profitable growth...',
        img: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=600',
        createdAt: '01 November 2024',
        author: 'Dipanita Biswas',
        redirectTo: '/blog-details'

    },
]

const Blogs = () => {

    const breadcrumbPaths = [
        { href: '/', label: 'Home' },
        { href: '/blogs', label: 'Blogs' },
    ];
    return (
        <>


            <div className='max-w-[1540px] mx-auto p-4'>
                <Breadcrumb paths={breadcrumbPaths} />

                <div className='mainCategoryHead'>
                    <h1 className='text-[32px] font-bold text-[#63948b]'>Empowering Minds for Better Wellbeing</h1>
                    <p>The Untitled UI Journal features carefully selected good works from studios, designers, architects, photographers, and creators from all around the globe. Subscribe for new posts in your inbox.</p>
                </div>


                {/* Blog listing Comes here */}

                {
                    tempBlogsData.map((item, index) => {
                        return <BlogBody
                            key={item.id}
                            title={item.title}
                            img={item.img}
                            desc={item.desc}
                            createdAt={item.createdAt}
                            author={item.author}
                            redirect={item.redirectTo}
                        />
                    })
                }


            </div>

        </>
    )
}

export default Blogs


const BlogBody = ({ title, img, createdAt, author, desc, redirect }) => {

    return (
        <><Link to={redirect}> 
            <div className='w-full my-[30px]'>
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
            </div>
        </Link>
        </>
    )
}