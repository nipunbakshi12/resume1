import React, { useState, useEffect } from 'react';

function Hero() {
    const roles = ['Coder', 'Full Stack Developer', 'Web Developer'];
    const [currentText, setCurrentText] = useState('');
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const [paddingTop, setPaddingTop] = useState('80px'); // Default padding-top
    const [isDelayOver, setIsDelayOver] = useState(false); // To track the delay for image and voice

    // Adjust padding-top based on screen width
    useEffect(() => {
        const updatePaddingTop = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 500) {
                setPaddingTop('100px');
            } else if (screenWidth < 768) {
                setPaddingTop('60px');
            } else {
                setPaddingTop('80px'); // Default for larger screens
            }
        };

        // Initial check and event listener for resize
        updatePaddingTop();
        window.addEventListener('resize', updatePaddingTop);

        // Cleanup listener
        return () => window.removeEventListener('resize', updatePaddingTop);
    }, []);

    // Typing animation for roles
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

    // Delay for image load and greeting
    useEffect(() => {
        const delayTimer = setTimeout(() => {
            setIsDelayOver(true);
            const greeting = new SpeechSynthesisUtterance('Hello, Nipun this side!');
            greeting.lang = 'en-US';
            greeting.volume = 1; // Volume (0 to 1)
            greeting.rate = 1; // Speed (default is 1)
            greeting.pitch = 1; // Pitch (default is 1)
            window.speechSynthesis.speak(greeting);
        }, 3000); // 3-second delay

        return () => {
            clearTimeout(delayTimer);
            window.speechSynthesis.cancel(); // Stop ongoing speech on component unmount
        };
    }, []);

    return (
        <section id="hero" className="relative pt-8 pb-12 md:py-24 overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative">
                {/* Left side: Text */}
                <div className="w-full md:w-1/2 text-center md:text-left z-10">
                    <h1
                        className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
                        style={{ paddingTop }}
                    >
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
                        href="../public/pdf/resume.pdf"
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
                        className={`absolute w-[46vw] h-[36vw] right-0 top-[50%] -translate-y-1/2 blur-xl ${!isDelayOver && 'hidden'
                            }`}
                        id="hero-shape"
                    >
                        <div className="absolute bg-gradient-to-r from-green-500 to-orange-300 rounded-full w-full h-full animate-pulse opacity-50"></div>
                        <div className="absolute bg-gradient-to-r from-orange-500 to-green-300 rounded-full w-[30vw] h-[30vw] animate-bounce opacity-70"></div>
                    </div>

                    {/* Profile Image */}
                    <img
                        src="../images/profile.jpg" // Replace with your actual image path
                        alt="Profile"
                        className={`w-full h-96 object-cover border-4 border-blue-600 shadow-lg z-10 ${!isDelayOver && 'hidden'
                            }`}
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;
