/* eslint-disable no-unused-vars */
import React from 'react'
import facebookLogo from '../social-icons/facebook.png'
import InstagramLogo from '../social-icons/instagram.png'
import LinkedinLogo from '../social-icons/linkedin.png'
import TwitterLogo from '../social-icons/twitter.png'
import YouTubeLogo from '../social-icons/youtube.png'


const FollowCta = () => {

    const socialLinks = [
        { id: 1, img: facebookLogo },
        { id: 2, img: InstagramLogo, redirectTo: 'https://www.instagram.com/yog_astsankhlam/' },
        { id: 3, img: LinkedinLogo, redirectTo: 'https://www.linkedin.com/in/dipanita-biswas-3690b5324/' },
        { id: 4, img: TwitterLogo }
    ]


    return (
        <>
            <div>
                {
                    socialLinks.map((item, index) => (
                        <div className='w-5 md:w-[35px] h-5 md:h-[35px] rounded-full bg-white flex flex-col mt-2 p-[4px]' key={index}>
                            <a href={item.redirectTo} target='_blank'>
                                <img className='w-[15px] sm:w-[28px] mx-auto' src={item.img} alt="" />
                            </a>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default FollowCta