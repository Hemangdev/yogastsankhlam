/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Breadcrumb from './Breadcrumb';
import { CiShare1 } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useParams } from 'react-router-dom';

const BlogDetails = ({ blogs }) => {


    const { id } = useParams();
    const blog = blogs.find((item) => item.id === parseInt(id, 10));

    if (!blog) {
        return <p>Blog Not Found</p>;
    }


    const breadcrumbPaths = [
        { href: '/', label: 'Home' },
        { href: '/blogs', label: 'Blogs' },
        { href: '/blog-details', label: 'Blog-Details' }
    ];
    return (
        <>
            <div className='max-w-[1540px] mx-auto p-4'>
                <Breadcrumb paths={breadcrumbPaths} />
                <div className='mainDiv'>
                    <h1 className='text-black font-bold text-[30px] md:text-[48px]'>{blog.title}</h1>

                    <div className='w-full flex justify-between my-5'>
                        <div className='userDiv font-bold'>{blog.author}</div>

                        <div className='social-connect flex gap-2'>
                            <FaWhatsapp size={20} />
                            <FaInstagram size={20} />
                            <CiShare1 size={20} />
                        </div>
                    </div>
                    <div className='imgDiv'>
                        <img className='rounded-2xl my-3' src= {blog.img} alt="" />
                    </div>

                    <div className='content-div'>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque maxime, culpa ratione tenetur quidem amet non qui, consequatur repudiandae totam aliquam iure ipsam! Odit, quasi. Ut dolorum eligendi culpa quis.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque maxime, culpa ratione tenetur quidem amet non qui, consequatur repudiandae totam aliquam iure ipsam! Odit, quasi. Ut dolorum eligendi culpa quis.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque maxime, culpa ratione tenetur quidem amet non qui, consequatur repudiandae totam aliquam iure ipsam! Odit, quasi. Ut dolorum eligendi culpa quis.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque maxime, culpa ratione tenetur quidem amet non qui, consequatur repudiandae totam aliquam iure ipsam! Odit, quasi. Ut dolorum eligendi culpa quis.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque maxime, culpa ratione tenetur quidem amet non qui, consequatur repudiandae totam aliquam iure ipsam! Odit, quasi. Ut dolorum eligendi culpa quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sequi sit mollitia impedit? Soluta, aliquam asperiores facilis temporibus sit mollitia optio, quo iure repudiandae blanditiis cum ullam quis sequi? Sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus optio laudantium quae consectetur, doloribus ut iusto hic aliquid distinctio! Esse suscipit dignissimos optio recusandae officia quas totam dolores repudiandae voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam et tenetur est voluptatem, reiciendis fuga quibusdam ea possimus repellendus impedit rem. Accusamus excepturi commodi amet est itaque praesentium. Inventore, dolore.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque maxime, culpa ratione tenetur quidem amet non qui, consequatur repudiandae totam aliquam iure ipsam! Odit, quasi. Ut dolorum eligendi culpa quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sequi sit mollitia impedit? Soluta, aliquam asperiores facilis temporibus sit mollitia optio, quo iure repudiandae blanditiis cum ullam quis sequi? Sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus optio laudantium quae consectetur, doloribus ut iusto hic aliquid distinctio! Esse suscipit dignissimos optio recusandae officia quas totam dolores repudiandae voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam et tenetur est voluptatem, reiciendis fuga quibusdam ea possimus repellendus impedit rem. Accusamus excepturi commodi amet est itaque praesentium. Inventore, dolore.</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default BlogDetails