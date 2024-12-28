/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";



const instaData = [
    {
        id: 1,
        url: 'https://www.instagram.com/reel/DBtEKGrRaev/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
        id: 2,
        url: 'https://www.instagram.com/reel/DByDH43J-OG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
        id: 3,
        url: 'https://www.instagram.com/reel/DBVDoEkRZAr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
        id: 4,
        url: 'https://www.instagram.com/p/DBYOmhIpKv9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
        id: 5,
        url: 'https://www.instagram.com/p/DBYOmhIpKv9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
        id: 6,
        url: 'https://www.instagram.com/p/DBYOmhIpKv9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
]



const InstaFollow = () => {
    return (
        <>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={4}
              spaceBetween={20}
              navigation={false}
              speed={1000}
              className="mySwiper"
              autoplay={{
                delay: 4000,
                disableOnInteraction: true
              }}
              pagination={{
                clickable: true, // Enables clickable pagination dots
                dynamicBullets: true, // Makes pagination bullets interactive
              }}
              breakpoints={{
                350: {
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                550: {
                  slidesPerView: 2,
                  spaceBetween: 10
                },
                667: {
                  slidesPerView: 3,
                  spaceBetween: 10
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 10
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 20

                }
              }}
            >
                {
                    instaData.map((item, index) => (
                        <SwiperSlide>
                            <div  style={{ display: 'flex', justifyContent: 'center' }}>
                                <InstagramEmbed className='rounded-2xl' url={item.url} width={350} height={450} />
                            </div>
                        </SwiperSlide>
                    ))
                }



            </Swiper> 
        </>
    )
}

export default InstaFollow