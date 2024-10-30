/* eslint-disable no-unused-vars */
import React from 'react'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'

const mudrasData = [
    {
        id: 1,
        mudra: 'Hello Mudra',
        img: img1,
        details: 'Yogastsankhlam is the best studio of the yoga and meditation, sharp your yoga with astsankhlam'
    },
    {
        id: 2,
        mudra: 'Hello Mudra',
        img: img2,
        details: 'Yogastsankhlam is the best studio of the yoga and meditation, sharp your yoga with astsankhlam'
    },
    {
        id: 3,
        mudra: 'Hello Mudra',
        img: img3,
        details: 'Yogastsankhlam is the best studio of the yoga and meditation, sharp your yoga with astsankhlam'
    },
]

const Mudras = () => {
    return (
        <>
            {
                mudrasData.map((item, index) => (
                    <div key={item.id} className="max-w-[22rem] sm:max-w-[20rem] md:max-w-[18rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={item.img} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.mudra}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">({item.details})</p>

                        </div>
                    </div>
                ))
            }



        </>
    )
}

export default Mudras