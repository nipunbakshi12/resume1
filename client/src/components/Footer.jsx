import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a
                        href="https://github.com/nipunbakshi12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-gray-400"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nipun-bakshi-56787321b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-gray-400"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

