import React from "react";
import { motion } from "framer-motion";
import SkillShowcase from "./SkillShowcase";

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
        <section id="skills" className="py-12 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-6 lg:px-12">
                <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
                    Me and my Tech Stack
                </h2>

                <div className="flex flex-col mt-10 md:flex-row md:gap-16 lg:gap-20 xl:gap-28 items-center">
                    {/* Left side: Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 text-lg text-gray-700 dark:text-gray-300"
                    >
                        <p className="leading-relaxed space-y-4">
                            Hi everyone! My name is <span className="font-semibold text-[#c24be2]">Nipun Bakshi</span>, and I am a passionate <span className="font-semibold">Full Stack Web Developer</span> with a strong interest in building dynamic, user-friendly, and responsive web applications. I’m currently in my final year of a <span className="font-semibold">Bachelor of Technology in Computer Science and Engineering</span>, and have spent the past few years sharpening my technical skills and working on diverse development projects.
                            My technical toolkit includes <span className="font-semibold text-[#c24be2]">HTML, CSS, JavaScript, jQuery, React.js, Node.js, Express.js, MongoDB, Python, and SQL</span>. I'm comfortable working across the full stack—from designing intuitive user interfaces to developing robust server-side logic. I'm always eager to explore new frameworks, tools, and best practices to enhance my development process.
                            <br /><br />
                            In addition to my development experience, I also have a solid understanding of <span className="font-semibold">Software Testing and Quality Assurance</span> principles. This knowledge helps me write cleaner, more reliable code and ensures that the applications I build are both functional and user-focused.
                            <br /><br />
                            I'm a curious problem-solver, a fast learner, and a strong believer in continuous improvement. I love collaborating with teams to create impactful digital solutions that solve real-world problems.
                        </p>
                    </motion.div>

                    {/* Right side: Skills logos */}

                    <SkillShowcase />



                    {/* <motion.div
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
                    </motion.div> */}
                </div>
            </div>
        </section>
    );
}

export default Skills;
