import React, { useState, useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (newTheme) => {
    toggleTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-gray-800 text-white flex items-center justify-center"
      >
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-gray-800 text-white rounded shadow-lg">
          <ul className="list-none p-2">
            <li
              onClick={() => handleToggle('light')}
              className="p-2 hover:bg-gray-700 cursor-pointer flex items-center"
            >
              <FaSun className="mr-2" /> Light
            </li>
            <li
              onClick={() => handleToggle('dark')}
              className="p-2 hover:bg-gray-700 cursor-pointer flex items-center"
            >
              <FaMoon className="mr-2" /> Dark
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
