import React, { useState, useEffect } from 'react';

function Hero() {
    const roles = ['Coder', 'Full Stack Developer', 'Web Developer'];
    const [currentText, setCurrentText] = useState('');
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

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
                {/* Left side: Text */}
                <div className="w-full md:w-1/2 text-center md:text-left z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight sm:pt-[80px]">
                        Nipun Bakshi
                    </h1>
                    <h2 className="text-2xl md:text-3xl mb-6">
                        I am a {currentText}
                        <span className="blink-cursor">|</span>
                    </h2>
                    <p className="text-lg mb-8 max-w-2xl">
                        Experienced Full Stack Developer with expertise in front-end and back-end technologies. Proficient in JavaScript, React.js, Node.js, Express.js, MongoDB. Skilled in creating responsive, user-friendly web applications. Strong problem-solving abilities and a collaborative team player. Committed to continuous learning and staying updated with industry trends.
                    </p>
                    <a
                        href="/path-to-your-resume.pdf"
                        download
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Download Resume
                    </a>
                </div>

                {/* Right side: Profile Image */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
                    {/* Animated Background */}
                    <div
                        className="absolute w-[46vw] h-[36vw] right-0 top-[50%] -translate-y-1/2 blur-xl"
                        id="hero-shape"
                    >
                        <div className="absolute bg-gradient-to-r from-green-500 to-orange-300 rounded-full w-full h-full animate-pulse opacity-50"></div>
                        <div className="absolute bg-gradient-to-r from-orange-500 to-green-300 rounded-full w-[30vw] h-[30vw] animate-bounce opacity-70"></div>
                    </div>

                    {/* Profile Image */}
                    <img
                        src="../images/profile.jpg" // Replace with your actual image path
                        alt="Profile"
                        className="w-full h-96 object-cover border-4 border-blue-600 shadow-lg z-10"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
