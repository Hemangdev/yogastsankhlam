/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Breadcrumb.js
import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcrumb = ({ paths }) => {
  return (
    <nav className="breadcrumb text-gray-600 text-sm mb-4">
      <ol className="flex">
        {paths.map((path, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2"><MdKeyboardArrowRight/></span>}
            {index < paths.length - 1 ? (
              <Link to={path.href} className="text-blue-500 hover:underline">
                {path.label}
              </Link>
            ) : (
              <span>{path.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
