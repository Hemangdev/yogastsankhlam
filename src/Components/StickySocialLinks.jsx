/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaYoutube } from 'react-icons/fa';

const StickySocialLinks = () => {
  return (
    <div className="flex flex-col items-center space-y-4 text-white">
      <span className="rotate-90 uppercase tracking-wide text-sm text-gray-400">Follow Us</span>
      <div className="w-px h-12 bg-gray-400"></div>
      <div className="space-y-4">
        <a href="#" aria-label="Facebook" className="hover:text-blue-600">
          <FaFacebookF />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
          <FaLinkedinIn />
        </a>
        <a href="#" aria-label="Pinterest" className="hover:text-red-600">
          <FaPinterestP />
        </a>
        <a href="#" aria-label="YouTube" className="hover:text-red-500">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default StickySocialLinks;
