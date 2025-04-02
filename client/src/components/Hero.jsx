import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Hero() {
    const roles = ['Coder', 'Full Stack Developer', 'Web Developer'];
    const [currentText, setCurrentText] = useState('');
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [paddingTop, setPaddingTop] = useState('80px');
    const [imageSrc, setImageSrc] = useState('../images/profile.jpg');

    useEffect(() => {
        const updatePaddingTop = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 500) {
                setPaddingTop('100px');
            } else if (screenWidth < 768) {
                setPaddingTop('60px');
            } else {
                setPaddingTop('80px');
            }
        };

        updatePaddingTop();
        window.addEventListener('resize', updatePaddingTop);
        return () => window.removeEventListener('resize', updatePaddingTop);
    }, []);

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[currentRoleIndex];
            if (isDeleting) {
                setCurrentText(currentRole.substring(0, currentText.length - 1));
            } else {
                setCurrentText(currentRole.substring(0, currentText.length + 1));
            }

            if (!isDeleting && currentText === currentRole) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

    return (
        <section id="hero" className="relative pt-8 pb-12 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative">
                <div className="w-full md:w-1/2 text-center md:text-left z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight" style={{ paddingTop }}>
                        Nipun Bakshi
                    </h1>
                    <h2 className="text-2xl md:text-3xl mb-6">
                        I am a {currentText}
                        <span className="blink-cursor">|</span>
                    </h2>
                    <p className="text-lg mb-8 max-w-2xl">
                        Experienced Full Stack Developer with expertise in front-end and back-end technologies. Proficient in JavaScript, React.js, Node.js, Express.js, MongoDB. Skilled in creating responsive, user-friendly web applications. Strong problem-solving abilities and a collaborative team player. Committed to continuous learning and staying updated with industry trends.
                    </p>
                    <a href="/pdf/NIPUN_BAKSHI_RESUME.pdf" download className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Download Resume
                    </a>
                </div>

                <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
                    <motion.div
                        className="absolute w-[40vw] h-[35vw] right-0 top-[50%] -translate-y-1/2 blur-2xl opacity-40"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <div className="absolute bg-gradient-to-r from-blue-500 to-purple-400 rounded-full w-[85%] h-[55%] opacity-60"></div>
                        <div className="absolute bg-gradient-to-r from-purple-500 to-blue-300 rounded-full w-[0%] h-[30%] opacity-50"></div>
                    </motion.div>


                    <motion.img
                        src={imageSrc}
                        alt="Profile"
                        className="w-72 h-72 md:w-96 md:h-96 object-cover border-4 border-blue-600 shadow-2xl z-10 rounded-full"
                        onMouseEnter={() => setImageSrc('../images/ghibli_image.png')}
                        onMouseLeave={() => setImageSrc('../images/profile.jpg')}
                        initial={{ opacity: 0.8 }}
                        whileHover={{ scale: 1.1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;