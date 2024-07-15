import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeStore } from "./utility/ThemeContext";
import { motion } from 'framer-motion';

let Navbar = () => {
  let { theme, setTheme } = useContext(ThemeStore);
  let navigate = useNavigate();

  let handleLogout = () => {
    // Add any logout logic here
    navigate('/Login');
  };

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`navbar ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center w-full">
          <Link to="/Home" className="text-3xl font-bold text-fuchsia-600 hover:text-fuchsia-700 transition-colors duration-300">
            Code Galaxy
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/About" className="hover:text-fuchsia-600 transition-colors duration-300">Credits</Link>
            <Link to="/MyCourses" className="hover:text-fuchsia-600 transition-colors duration-300">My Courses</Link>
            <label className="flex cursor-pointer gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={theme === 'dark'}
                onChange={() => {
                  const newTheme = theme === 'light' ? 'dark' : 'light';
                  setTheme(newTheme);
                  localStorage.setItem('Theme', newTheme);
                }}
              />
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded ${theme === 'dark' ? 'bg-fuchsia-600 hover:bg-fuchsia-700' : 'bg-fuchsia-500 hover:bg-fuchsia-600'} text-white transition-colors duration-300`}
              onClick={handleLogout}
            >
              Logout
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;