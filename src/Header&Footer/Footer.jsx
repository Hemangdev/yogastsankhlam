import React from "react";
import { GiMeditation } from "react-icons/gi"; // Importing meditation icon
import Logo from '../assets/logo.png'

const Footer = () => {
  // const baseUrl = "https://sevasarathi.in/";

  return (
    <footer className="bg-[#e4dacc] text-[#516157] py-10 mt-10">
      <div className="container mx-auto text-center">
        {/* Logo */}
        <img
          src={Logo}
          alt="site-logo"
          width="120"
          className="mx-auto"
        />

        {/* Heartwarming Message */}
        <p className="font-bold text-2xl mt-4">
          "Every soul deserves peace and balance. Embrace yoga and mindfulness for a healthier mind and body."
        </p>

        {/* Navigation Links */}
        <div className="flex justify-center mt-4 space-x-6">
          <a href="#" className="text-[#516157] hover:underline">Donate Now</a>
          <span className="text-white">|</span>
          <a href="#" className="text-[#516157] hover:underline">About Us</a>
          <span className="text-white">|</span>
          <a href="#" className="text-[#516157] hover:underline">Blogs</a>
          <span className="text-white">|</span>
          <a href="#" className="text-[#516157] hover:underline">Gallery</a>
        </div>
      </div>

      <hr className="my-6 border-gray-600" />

      {/* Footer Sections */}
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Google Maps */}
        <div className="border-r border-gray-600 pr-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.95373531531686!3d-37.81627974202148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57778e2baf45d4!2sFlinders%20Street%20Station!5e0!3m2!1sen!2sus!4v1618791158426!5m2!1sen!2sus"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Information */}
        <div className="border-r border-gray-600 px-4">
          <h5 className="font-semibold mb-3">📩 Get in Touch</h5>
          <p>
            We currently operate online.<br />
            Email: contact@sevasarathi.org<br />
            Phone: +91 98765 43210
          </p>
        </div>

        {/* Yoga & Meditation Resources */}
        <div className="flex flex-col items-center">
          <h5 className="font-semibold mb-3 flex items-center">
            <GiMeditation className="text-3xl mr-2" /> Yoga & Meditation
          </h5>
          <p className="mt-2 text-center">Discover the power of mindfulness and well-being. Join our free yoga and meditation sessions online.</p>
          <a href="#" className="text-[#516157] underline mt-2">Learn More</a>
        </div>
      </div>

      <hr className="my-6 border-gray-600" />

      {/* Copyright */}
      <div className="text-center mt-4">
        <p className="mb-0">© 2025 Yogastsankhlam | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
