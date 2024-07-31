import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { HiHome, HiDocumentText, HiInformationCircle } from 'react-icons/hi';

const Sidebar = ({ isOpen, onClose }) => {
  const isDarkMode = document.body.classList.contains('dark'); // Check if dark mode is enabled

  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-30 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <button
        onClick={onClose}
        className={`absolute top-4 right-4 text-3xl ${
          isDarkMode ? 'text-gray-400 hover:text-gray-600' : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        <FaTimes />
      </button>
      <div className="flex flex-col items-start mt-44 px-6 space-y-6">
        <a href="#" className={`flex items-center text-lg font-semibold ${
          isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-500'
        } transition-colors duration-200`}>
          <HiHome className="mr-3 text-2xl" /> Home
        </a>
        <a href="#" className={`flex items-center text-lg font-semibold ${
          isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-500'
        } transition-colors duration-200`}>
          <HiDocumentText className="mr-3 text-2xl" /> Blog
        </a>
        <a href="#" className={`flex items-center text-lg font-semibold ${
          isDarkMode ? 'hover:text-gray-400' : 'hover:text-gray-500'
        } transition-colors duration-200`}>
          <HiInformationCircle className="mr-3 text-2xl" /> About
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
