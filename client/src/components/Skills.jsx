import React from "react";
import { motion } from "framer-motion";

const skills = [
    { name: "HTML", icon: "../images/html.png" },
    { name: "CSS", icon: "../images/css.jpg" },
    { name: "JavaScript", icon: "../images/js.png" },
    { name: "jQuery", icon: "../images/jquery.png" },
    { name: "React.js", icon: "../images/react.png" },
    { name: "Node.js", icon: "../images/node.png" },
    { name: "Express.js", icon: "../images/express.png" },
    { name: "MongoDB", icon: "../images/mongo.png" },
    { name: "Python", icon: "../images/python.png" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

function Skills() {
    return (
        <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-6 lg:px-12">
                <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    Me and my Tech Stack
                </h2>

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left side: Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 text-lg text-gray-700 dark:text-gray-300"
                    >
                        <p className="leading-relaxed">
                            Hi everyone! My name is <span className="font-semibold text-blue-600 dark:text-blue-400">Nipun Bakshi</span>, and I am a <span className="font-semibold">Full Stack Web Developer</span> with a passion for creating dynamic and responsive web applications. I have been honing my skills for the past few years, and I’m currently in my final year of a <span className="font-semibold">Bachelor of Technology in Computer Science and Engineering</span>.
                        </p>
                        <br />
                        <p className="leading-relaxed">
                            My expertise lies in using technologies like <span className="font-semibold text-blue-600 dark:text-blue-400">React, Node.js, and Express</span> to build robust applications. I'm always eager to learn and explore new frameworks and libraries.
                        </p>
                        <br />
                        <p className="leading-relaxed">
                            With a commitment to continuous improvement, I strive to stay updated with the latest industry trends and best practices. I look forward to collaborating on exciting projects and contributing my skills to create impactful solutions!
                        </p>
                    </motion.div>

                    {/* Right side: Skills logos */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full md:w-1/2 grid grid-cols-3 gap-6 justify-items-center"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform"
                            >
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-24 h-24 mb-3 object-contain rounded-full border-4 border-gray-200 dark:border-gray-600 transition-all duration-300 transform hover:scale-105"
                                />
                                <span className="text-sm font-semibold text-gray-900 dark:text-white mt-2">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
