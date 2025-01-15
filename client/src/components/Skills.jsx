import React from 'react';

const skills = [
    { name: 'HTML', icon: '../images/html.png' },
    { name: 'CSS', icon: '../images/css.jpg' },
    { name: 'JavaScript', icon: '../images/js.png' },
    { name: 'jQuery', icon: '../images/jquery.png' },
    { name: 'React.js', icon: '../images/react.png' },
    { name: 'Node.js', icon: '../images/node.png' }, // Node.js icon added
    { name: 'Express.js', icon: '../images/express.png' },
    { name: 'MongoDB', icon: '../images/mongo.png' },
    { name: 'Python', icon: '../images/python.png' },
];

function Skills() {
    return (
        <section id="skills" className="py-12 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8">Me and my Tech Stack</h2>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Left side: Description */}
                    <div className="w-full md:w-1/2">
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            Hi everyone! My name is Nipun Bakshi, and I am a Full Stack Web Developer with a passion for creating dynamic and responsive web applications. I have been honing my skills for the past few years, and I’m currently final year of my Bachelor of Technology in Computer Science and Engineering.<br /><br />

                            My expertise lies in using technologies like React, Node.js, and Express to build robust applications, I'm always eager to learn and explore new frameworks and libraries.<br /><br />

                            With a commitment to continuous improvement, I strive to stay updated with the latest industry trends and best practices. I look forward to collaborating on exciting projects and contributing my skills to create impactful solutions!
                        </p>
                    </div>

                    {/* Right side: Skills logos */}
                    <div className="w-full md:w-1/2">
                        {/* Display 3 logos in one row */}
                        <div className="grid grid-cols-3 gap-6">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="w-24 h-24 mb-2" // Increased width and height to w-24 h-24
                                    />
                                    <span className="text-sm font-semibold">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
