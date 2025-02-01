/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import Breadcrumb from '../Components/Breadcrumb';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Membership = () => {
    const formRef = useRef(null);

    const breadcrumbPaths = [
        { href: '/', label: 'Home' },
        { href: '/membership', label: 'Membership' },
    ];

    const [formData, setFormData] = useState({ name: "", email: "", age: "", profession: "", mobile: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const scriptURL = "https://script.google.com/macros/s/AKfycbxw7BoSqdbQICwCKyNs4IhhOIHXNoii95qL6hi9mwM7RbtiwehxEb44sKrfibiHW9Ji/exec"; // Replace with your Web App URL

    //     try {
    //         await axios.post(scriptURL, formData, { headers: { "Content-Type": "application/json" } });
    //         toast.success('Form Sent Successfully!', {
    //             autoClose: 5000, // Auto close after 5 seconds
    //         });
    //         formRef.current.reset();
    //         console.log(formData);

    //     } catch (error) {
    //         console.error("Error submitting form:", error);

    //         toast.error('Error adding blog. Please try again later.', {
    //             autoClose: 5000, // Auto close after 5 seconds
    //         });
    //     }
    //     // toast.success('Form Sent Successfully!', {
    //     //     autoClose: 5000, // Auto close after 5 seconds
    //     // });



    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const scriptURL = "https://script.google.com/macros/s/AKfycbw5OVUM1DPaoHVBFdIp2SUDniAzsfAgDERqC_P7gFdjPY35KQ_QaGxVRhl7EcC02KU/exec"; // Replace with latest Web App URL

        const formData = new FormData(e.target);
        const jsonData = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(scriptURL, {
                method: "POST",
                body: JSON.stringify(jsonData),
                headers: { "Content-Type": "application/json" },
                mode:'no-cors'
            });

            if (!response.ok) {
                const errorMessage = await response.text(); // Get error details
                throw new Error(`Server Error: ${response.status} - ${errorMessage}`);
            }

            const result = await response.json(); // Parse response JSON
            console.log("Success:", result);

            toast.success("Form Sent Successfully!", { autoClose: 5000 });
            e.target.reset(); // Reset form

        } catch (error) {
            console.error("Error submitting form:", error.message);
            toast.error(`Error submitting form: ${error.message}`, { autoClose: 5000 });
        }
    };


    return (
        <>
            <div className='max-w-[1540px] mx-auto p-4 mt-[70px]'>
                <Breadcrumb paths={breadcrumbPaths} />
                <form ref={formRef} onSubmit={handleSubmit} className="">
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your Name
                        </label>
                        <input
                            type="text"
                            name='name'
                            id="name"
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Your name"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your Email
                        </label>
                        <input
                            type="email"
                            name='email'
                            id="email"
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="age"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your Age
                        </label>
                        <input
                            onChange={handleChange}
                            type="text"
                            id="age"
                            name='age'
                            placeholder="Ex: 21yr"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="profession"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your Profession
                        </label>
                        <input
                            onChange={handleChange}
                            type="text"
                            id="profession"
                            name='profession'
                            placeholder="Ex: Private Employee"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="mobile"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Your Mobile No.
                        </label>
                        <input
                            type="tel"
                            id="mobile"
                            name='mobile'
                            onChange={handleChange}
                            placeholder="+91 897854##"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                        />
                    </div>
                    <div className="my-5">
                        <button
                            type="submit"
                            className="w-full text-white bg-[#63948b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Submit
                        </button>
                    </div>

                </form>
                <ToastContainer />
            </div>

        </>
    )
}

export default Membership