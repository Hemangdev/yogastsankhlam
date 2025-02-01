/* eslint-disable no-unused-vars */
import React, { useRef, useState } from 'react'
import Breadcrumb from '../Components/Breadcrumb';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';

const Membership = () => {
    const formRef = useRef(null);

    const breadcrumbPaths = [
        { href: '/', label: 'Home' },
        { href: '/membership', label: 'Membership' },
    ];

    const [formData, setFormData] = useState({ name: "", email: "", age: "", profession: "", mobile: "" });
    const [loading, setLoading] = useState(false);

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

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true); // Start loading

    //     const scriptURL = "https://script.google.com/macros/s/AKfycbxYIsaJRkHu-SqbjFz7JV0fTMPf-8vLg8kT644Fh9QrKFe7-qBGSg4x1zNY8nsA7Fg/exec"; // Replace with actual URL
    //     const formData = new FormData(e.target);
    //     const jsonData = Object.fromEntries(formData.entries());

    //     try {
    //         const response = await fetch(scriptURL, {
    //             method: "POST",
    //             body: JSON.stringify(jsonData),
    //             headers: { "Content-Type": "application/json" },
    //         });

    //         if (!response.ok) {
    //             const errorText = await response.text(); // Get error message from response
    //             throw new Error(`Error: ${response.status} - ${errorText}`);
    //         }

    //         const result = await response.json(); // Parse the result if needed
    //         console.log("Success:", result);
    //         toast.success("Form Sent Successfully!", { autoClose: 5000 });
    //         e.target.reset(); // Reset the form
    //     } catch (error) {
    //         console.error("Error submitting form:", error.message);
    //         toast.error(`Error: ${error.message}`, { autoClose: 5000 });
    //     }

    //     setLoading(false); // Stop loading after submission
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading

        // EmailJS variables
        const serviceID = 'service_p1ifge6'; // Replace with your service ID
        const templateID = 'template_pb9rqua'; // Replace with your template ID
        const userID = '_1AVSuPs_7C6gA0zx'; // Replace with your user ID (can be found in EmailJS dashboard)

        // Collect form data
        const formData = new FormData(e.target);
        const jsonData = Object.fromEntries(formData.entries());

        try {
            // Send the email using EmailJS
            const response = await emailjs.send(serviceID, templateID, jsonData, userID);

            if (response.status === 200) {
                console.log("Success:", response);
                toast.success("Form Sent Successfully!", { autoClose: 5000 });
                e.target.reset(); // Reset the form
            } else {
                throw new Error(`Error: ${response.status} - ${response.text}`);
            }
        } catch (error) {
            console.error("Error sending email:", error.message);
            toast.error(`Error: ${error.message}`, { autoClose: 5000 });
        }

        setLoading(false); // Stop loading after submission
    };


    return (
        <>
            <div className='max-w-[1540px] mx-auto p-4 mt-[70px]'>
                <Breadcrumb paths={breadcrumbPaths} />
                <div className='mainCategoryHead'>
                    <h1 className="text-[32px] md:text-[38px] font-bold text-[#63948b]">
                        Connect with Us for Your Yoga Journey
                    </h1>
                    <p className="md:text-[20px]">
                        We’re here to guide and support you on your wellness journey. Whether you’re looking for more information, have questions, or are ready to begin your yoga practice, we’d love to hear from you. Get in touch with us today!
                    </p>
                </div>
                <form ref={formRef} onSubmit={handleSubmit} className="mt-[30px]">
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
                    {/* <div className="my-5">
                        <button
                            type="submit"
                            className="w-full text-white bg-[#63948b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            Submit
                        </button>
                    </div> */}
                    <div className="my-5">
                        <button
                            type="submit"
                            className={`w-full text-white bg-[#63948b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center transition-all duration-200 ease-in-out ${loading ? "opacity-70 cursor-wait" : ""}`}
                            disabled={loading} // Disable button when loading
                        >
                            {loading ? (
                                <div className="flex justify-center items-center space-x-2">
                                    {/* Simple Dot Loader */}
                                    <span className="loader-dot"></span>
                                    <span>Processing...</span>
                                </div>
                            ) : (
                                "Submit"
                            )}
                        </button>
                    </div>

                </form>
                <ToastContainer />
            </div>

        </>
    )
}

export default Membership