import React from 'react';
import { Link } from 'react-scroll';
import { FaSun, FaMoon } from 'react-icons/fa';

function Header({ darkMode, toggleDarkMode }) {
    return (
        <header className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo or Name */}
                <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    className="text-2xl font-bold cursor-pointer text-gray-900 dark:text-white"
                >
                    Nipun Bakshi
                </Link>

                {/* Navigation Links */}
                <nav className="flex space-x-6">
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="text-gray-900 dark:text-white hover:text-blue-600 cursor-pointer"
                    >
                        Projects
                    </Link>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}
                        className="text-gray-900 dark:text-white hover:text-blue-600 cursor-pointer"
                    >
                        Skills
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="text-gray-900 dark:text-white hover:text-blue-600 cursor-pointer"
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Dark Mode Toggle */}
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
                >
                    {darkMode ? (
                        <FaSun className="text-yellow-400" />
                    ) : (
                        <FaMoon className="text-gray-700" />
                    )}
                </button>
            </div>
        </header>
    );
}

export default Header;
