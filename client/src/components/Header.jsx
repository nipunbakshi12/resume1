import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import logoDark from "../assets/logo_dark.png";

function Header({ darkMode, toggleDarkMode }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50"
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo or Name */}
                <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="flex items-center space-x-2 text-2xl font-bold cursor-pointer text-gray-900 dark:text-white"
                >
                    <motion.img
                        src={darkMode ? logoDark : logo}
                        alt="Logo"
                        className="h-10 w-auto"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.span
                        whileHover={{ scale: 1.1, color: darkMode ? '#facc15' : '#2563eb' }}
                        transition={{ duration: 0.3 }}
                    >
                        Nipun Bakshi
                    </motion.span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6">
                    {["projects", "skills", "contact"].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1, color: darkMode ? "#facc15" : "#2563eb" }}
                            transition={{ duration: 0.3 }}
                        >
                            <Link
                                to={item}
                                smooth={true}
                                duration={500}
                                className="text-gray-900 dark:text-white hover:text-blue-600 cursor-pointer"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button onClick={toggleMenu} className="md:hidden text-gray-900 dark:text-white text-2xl">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Dark Mode Toggle */}
                <motion.button
                    onClick={toggleDarkMode}
                    className="hidden md:flex p-3 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md"
                    whileHover={{ scale: 1.2, rotate: 20 }}
                    transition={{ duration: 0.3 }}
                >
                    {darkMode ? <FaSun className="text-yellow-400 text-xl" /> : <FaMoon className="text-gray-700 text-xl" />}
                </motion.button>
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-white dark:bg-gray-900 shadow-md py-4 absolute top-full left-0 w-full"
                    >
                        <nav className="flex flex-col items-center space-y-4">
                            {["projects", "skills", "contact"].map((item, index) => (
                                <Link
                                    key={index}
                                    to={item}
                                    smooth={true}
                                    duration={500}
                                    className="text-gray-900 dark:text-white hover:text-blue-600 cursor-pointer text-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </Link>
                            ))}
                        </nav>

                        {/* Dark Mode Toggle in Mobile Menu */}
                        <div className="flex justify-center mt-4">
                            <motion.button
                                onClick={toggleDarkMode}
                                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md"
                                whileHover={{ scale: 1.2, rotate: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {darkMode ? <FaSun className="text-yellow-400 text-xl" /> : <FaMoon className="text-gray-700 text-xl" />}
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

export default Header;
