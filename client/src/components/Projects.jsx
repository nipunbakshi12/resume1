import React from 'react';

const projects = [
    {
        title: 'Yummy Section',
        description: 'An online food app website that provides a variety of food options with ordering and payment integration.',
        link: 'https://github.com/nipunbakshi12/Yummy-Section',
        image: '../images/yummy.png', // Correct path to image in public/images folder
    },
    {
        title: 'Ship Shop Store',
        description: 'A grocery website that allows users to purchase various grocery items online with a seamless shopping experience.',
        link: 'https://shipshopstore.in/',
        image: '../images/shipShop.png', // Correct path to image in public/images folder
    },
    {
        title: 'Apple Website',
        description: 'A static clone of the official Apple website, designed to resemble the structure and design of Apple’s homepage.',
        link: 'https://nipunbakshi12.github.io/Apple-Static-Website/',
        image: '../images/apple.png', // Correct path to image in public/images folder
    },
    {
        title: 'Realme Clone',
        description: 'A static clone of the Realme website, replicating the design and structure of the official Realme homepage.',
        link: 'https://nipunbakshi12.github.io/Realme-Static-Website/',
        image: '../images/realme.png', // Correct path to image in public/images folder
    },
    {
        title: 'Weather Finder',
        description: 'A weather finder tool that provides real-time weather updates based on user location or city.',
        link: 'https://nipunbakshi12.github.io/Weather-Finder/',
        image: '../images/weather.png', // Correct path to image in public/images folder
    },
    {
        title: 'Translator',
        description: 'A language translator that supports translation in multiple languages, allowing seamless communication across regions.',
        link: 'https://nipunbakshi12.github.io/Translator/',
        image: '../images/translate.png', // Correct path to image in public/images folder
    },
    {
        title: 'Game Zone',
        description: 'A collection of games, including Tic Tac Toe and Rock Paper Scissors, offering fun and interactive gameplay.',
        link: 'https://github.com/nipunbakshi12/Game-Zone',
        image: '../images/games.png', // Correct path to image in public/images folder
    },
    {
        title: 'Portfolio',
        description: 'A personal portfolio website showcasing the skills, projects, and experiences of a model, highlighting their work.',
        link: 'https://noor-portfolio-gamma.vercel.app/',
        image: '../images/portfolio.png', // Correct path to image in public/images folder
    },
];

function Projects() {
    return (
        <section id="projects" className="py-12 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="relative group bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105"
                        >
                            {/* Project Image */}
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="mb-4">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
