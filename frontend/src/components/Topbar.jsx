import React from 'react';
import { FaBell, FaChevronDown, FaGlobe } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className="bg-orange-600 text-white h-16 pl-64 pr-6 flex items-center justify-between shadow fixed top-0 left-0 right-0 z-10">
      <button className="bg-black text-white px-4 py-2 rounded">New Transfer</button>

      <div className="flex items-center space-x-4">
        <FaBell className="text-xl cursor-pointer" />
        <div className="flex items-center space-x-2">
          <img
            src="https://i.pravatar.cc/300" // placeholder profile image
            alt="Profile"
            className="h-8 w-8 rounded-full"
          />
          <span>Adebayo Olatunji</span>
          <FaChevronDown />
        </div>
        <button className="flex items-center space-x-2 bg-black px-3 py-1 rounded">
          <FaGlobe />
          <span>EN</span>
        </button>
      </div>
    </div>
  );
};

export default Topbar;
