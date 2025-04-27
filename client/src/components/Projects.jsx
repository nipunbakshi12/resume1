import React, { useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import babyCrawling from './baby.json'

const mainProjects = [
    {
        title: "Bhagwati Motors Regd.",
        description: "Bhagwati Motors REgd. is a trusted car dealership offering a wide range of new and pre-owned vehicles, combining reliability, value, and customer satisfaction to make car buying a seamless and rewarding experience.",
        link: "https://bhagwaticars.com/",
        image: "../images/bhagwatiMotors.png",
    },
    {
        title: "Ship Shop Store",
        description: "A grocery website that allows users to purchase various grocery items online with a seamless shopping experience.",
        link: "https://shipshopstore.in/",
        image: "../images/shipShop.png",
    },
    {
        title: "Velour - Bags and Accessories",
        description: "Velour is an online store offering a curated collection of bags and accessories that combine elegance, modern design, and personal style, making luxury accessible for all.",
        link: "https://shopvelour.in/",
        image: "../images/velour.png",
    },
    {
        title: "Yummy Section",
        description: "An online food app website that provides a variety of food options with ordering and payment integration.",
        link: "https://github.com/nipunbakshi12/Yummy-Section",
        image: "../images/yummy.png",
    },
    {
        title: "Apple Website",
        description: "A static clone of the official Apple website, designed to resemble the structure and design of Apple’s homepage.",
        link: "https://nipunbakshi12.github.io/Apple-Static-Website/",
        image: "../images/apple.png",
    },
];

const beginnerProjects = [
    {
        title: "Weather Finder",
        description: "A weather finder tool that provides real-time weather updates based on user location or city.",
        link: "https://nipunbakshi12.github.io/Weather-Finder/",
        image: "../images/weather.png",
    },
    {
        title: "Realme Clone",
        description: "A static clone of the Realme website, replicating the design and structure of the official Realme homepage.",
        link: "https://nipunbakshi12.github.io/Realme-Static-Website/",
        image: "../images/realme.png",
    },
    {
        title: "Translator",
        description: "A language translator that supports translation in multiple languages, allowing seamless communication across regions.",
        link: "https://nipunbakshi12.github.io/Translator/",
        image: "../images/translate.png",
    },
    {
        title: "Portfolio",
        description: "A personal portfolio website showcasing the skills, projects, and experiences of a model, highlighting their work.",
        link: "https://noor-portfolio-gamma.vercel.app/",
        image: "../images/portfolio.png",
    },
    {
        title: "Game Zone",
        description: "A collection of games, including Tic Tac Toe and Rock Paper Scissors, offering fun and interactive gameplay.",
        link: "https://github.com/nipunbakshi12/Game-Zone",
        image: "../images/games.png",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } }
};

function Projects() {
    const [showModal, setShowModal] = useState(false);

    return (
        <section id="projects" className="py-12 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
                    My Projects
                </h2>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {mainProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="relative group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                >
                                    View Project →
                                </a>
                            </div>
                        </motion.div>
                    ))}

                    {/* Beginner Projects Card */}
                    <motion.div
                        variants={cardVariants}
                        className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer p-6 relative"
                        onClick={() => setShowModal(true)}
                    >
                        {/* Semi-circular text */}
                        <div className="absolute top-0 w-80 h-60 flex items-center justify-center font-bold">
                            <svg viewBox="0 0 200 100" className="w-full h-full">
                                <defs>
                                    <path
                                        id="semiCirclePath"
                                        d="M10,90 Q100,0 190,90"
                                        fill="transparent"
                                    />
                                </defs>
                                <text fill="currentColor" className="text-gray-900 dark:text-white text-sm">
                                    <textPath href="#semiCirclePath" startOffset="50%" textAnchor="middle">
                                        Beginner Projects
                                    </textPath>
                                </text>
                            </svg>
                        </div>

                        {/* Baby Crawling Lottie Animation */}
                        <div className="w-32 pt-6"> {/* Added pt-6 to push baby a little down */}
                            <Lottie animationData={babyCrawling} loop={true} />
                        </div>
                        <div>
                            Click to view my Beginner Projects
                        </div>
                    </motion.div>

                </motion.div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 w-[90%] max-w-5xl overflow-y-auto max-h-[90vh] relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-2xl"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                            Beginner Projects
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {beginnerProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className="group bg-gray-100 dark:bg-gray-700 rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105"
                                >
                                    <div className="relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                                            {project.description}
                                        </p>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                                        >
                                            View Project →
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;
