import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-center md:text-left text-sm md:text-base">&copy; {new Date().getFullYear()} Nipun Bakshi. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a
                        href="https://github.com/nipunbakshi12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-gray-400 transform transition-all duration-300 hover:scale-110"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nipun-bakshi-56787321b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl hover:text-gray-400 transform transition-all duration-300 hover:scale-110"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
