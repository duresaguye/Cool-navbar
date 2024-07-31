import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-16 bg-transparent border-b border-gray-700 z-10 backdrop-filter backdrop-blur-lg`}>
      <nav className="container mx-auto h-full flex items-center justify-between px-4">
       <div className="text-lg font-bold text-gray-800 dark:text-white">Logo</div>

        <button
          onClick={handleSidebarToggle}
          className="lg:hidden p-2 text-3xl light:text-gray-800 dark:text-white hover:text-gray-600 transition-colors duration-200"
        >
          <FaBars />
        </button>
        <div className="ml-4 hidden lg:flex space-x-6">
          <div className="hover:text-gray-300 cursor-pointer transition-colors duration-200">Home</div>
          <div className="hover:text-gray-300 cursor-pointer transition-colors duration-200">Blog</div>
          <div className="hover:text-gray-300 cursor-pointer transition-colors duration-200">About</div>
        </div>
        <div className="ml-4 hidden lg:block">
          <ThemeToggle />
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
    </div>
  );
};

export default Navbar;
