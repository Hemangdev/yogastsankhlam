/* eslint-disable no-unused-vars */
import React from 'react'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'

const mudrasData = [
    {
        id: 1,
        mudra: 'Namaskaram',
        img: img1,
        details: 'Namaskaram is a traditional greeting gesture in yoga, often performed as a sequence of movements to connect the mind, body, and soul. It is typically done by bringing the palms together in front of the heart (Anjali Mudra), accompanied by a slight bow, symbolizing respect, gratitude, and humility. This pose can be a warm-up to calm the mind and prepare for deeper practices.'
    },
    {
        id: 2,
        mudra: 'Paschimottanasana (Seated Forward Bend)',
        img: img2,
        details: 'Paschimottanasana is a seated yoga pose that stretches the back, hamstrings, and spine. To perform it, sit with your legs extended straight in front of you, and then slowly bend forward from the hips, reaching for your feet or ankles. It helps improve flexibility, relieve stress, and calm the mind, making it an excellent pose for relaxation.'
    },
    {
        id: 3,
        mudra: 'Pranayama',
        img: img3,
        details: 'Pranayama refers to the practice of controlled breathing techniques in yoga, which help regulate the flow of vital energy (prana) in the body. By focusing on the breath, practitioners can enhance mental clarity, reduce stress, and increase physical vitality. Pranayama is often practiced before or during asana sessions to calm the nervous system and prepare for meditation.'
    },
]

const Mudras = () => {
    return (
        <>
            {
                mudrasData.map((item, index) => (
                    <div key={item.id} className="max-w-[22rem] sm:max-w-[20rem] md:max-w-[30rem] bg-[#fff7eb] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img  className="rounded-t-lg w-full" src={item.img} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#3D211A]">{item.mudra}</h5>
                            </a>
                            <p className="mb-3 font-normal text-[#725C4C]">({item.details})</p>

                        </div>
                    </div>
                ))
            }



        </>
    )
}

export default Mudras