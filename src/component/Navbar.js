import React from 'react';
import { FaLinkedin, FaSearch, FaHome, FaUserFriends, FaBriefcase, FaEnvelope, FaBell } from 'react-icons/fa'; // Import LinkedIn and Search icons

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <FaLinkedin className="text-blue-700 h-10 w-10" />
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4 relative">
          <input
            type="text"
            placeholder="Search"
            className="w-5/6 p-2 border border-gray-200 bg-gray-200 rounded-md pl-10" 
          />
          <FaSearch className="absolute left-3 top-3 text-black" /> 
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-14 mr-20">
          <a href="#" className="text-3xl text-gray-600 hover:text-black"><FaHome/></a>
          <a href="#" className="text-3xl text-gray-600 hover:text-black"><FaUserFriends/></a>
          <a href="#" className="text-3xl text-gray-600 hover:text-black"><FaBriefcase/></a>
          <a href="#" className="text-3xl text-gray-600 hover:text-black"><FaEnvelope/></a>
          <a href="#" className="text-3xl text-gray-600 hover:text-black"><FaBell/></a>
        </div>

        {/* Profile Icon */}
        <div className='flex items-center mr-20'>
        <a href="#" className="text-lg text-gray-700 hover:text-black">Me</a>
          <img
            src="https://png.pngtree.com/png-clipart/20230824/original/pngtree-boy-avatar-in-round-web-button-isolated-on-white-picture-image_8377276.png"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
