import React from "react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Yummy Section",
        description: "An online food app website that provides a variety of food options with ordering and payment integration.",
        link: "https://github.com/nipunbakshi12/Yummy-Section",
        image: "../images/yummy.png",
    },
    {
        title: "Ship Shop Store",
        description: "A grocery website that allows users to purchase various grocery items online with a seamless shopping experience.",
        link: "https://shipshopstore.in/",
        image: "../images/shipShop.png",
    },
    {
        title: "Apple Website",
        description: "A static clone of the official Apple website, designed to resemble the structure and design of Apple’s homepage.",
        link: "https://nipunbakshi12.github.io/Apple-Static-Website/",
        image: "../images/apple.png",
    },
    {
        title: "Realme Clone",
        description: "A static clone of the Realme website, replicating the design and structure of the official Realme homepage.",
        link: "https://nipunbakshi12.github.io/Realme-Static-Website/",
        image: "../images/realme.png",
    },
    {
        title: "Weather Finder",
        description: "A weather finder tool that provides real-time weather updates based on user location or city.",
        link: "https://nipunbakshi12.github.io/Weather-Finder/",
        image: "../images/weather.png",
    },
    {
        title: "Translator",
        description: "A language translator that supports translation in multiple languages, allowing seamless communication across regions.",
        link: "https://nipunbakshi12.github.io/Translator/",
        image: "../images/translate.png",
    },
    {
        title: "Game Zone",
        description: "A collection of games, including Tic Tac Toe and Rock Paper Scissors, offering fun and interactive gameplay.",
        link: "https://github.com/nipunbakshi12/Game-Zone",
        image: "../images/games.png",
    },
    {
        title: "Portfolio",
        description: "A personal portfolio website showcasing the skills, projects, and experiences of a model, highlighting their work.",
        link: "https://noor-portfolio-gamma.vercel.app/",
        image: "../images/portfolio.png",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 } }
};

function Projects() {
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
                    {projects.map((project, index) => (
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
                </motion.div>
            </div>
        </section>
    );
}

export default Projects;