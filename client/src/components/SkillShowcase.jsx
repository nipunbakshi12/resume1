import React from 'react';
import { Computer, Code2, FileJson, Database, Table, TestTube, ShieldCheck, Braces, FileCode, Binary, Cpu, Terminal, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  { name: "HTML", icon: <FileCode className="w-5 h-5 mb-1" /> },
  { name: "CSS", icon: <Code2 className="w-5 h-5 mb-1" /> },
  { name: "JS", icon: <FileJson className="w-5 h-5 mb-1" /> },
  { name: "jQuery", icon: <Binary className="w-5 h-5 mb-1" /> },
  { name: "React.js", icon: <Braces className="w-5 h-5 mb-1" /> },
  { name: "Node.js", icon: <Cpu className="w-5 h-5 mb-1" /> },
  { name: "Express.js", icon: <Binary className="w-5 h-5 mb-1" /> },
  { name: "MongoDB", icon: <Database className="w-5 h-5 mb-1" /> },
  { name: "Python", icon: <Terminal className="w-5 h-5 mb-1" /> },
  { name: "SQL", icon: <Table className="w-5 h-5 mb-1" /> },
  { name: "Software testing", icon: <TestTube className="w-5 h-5 mb-1" /> },
  { name: "Quality Assurance", icon: <ShieldCheck className="w-5 h-5 mb-1" /> }
];

const SkillShowcase = () => {
  return (
    <div className="flex items-center justify-center p-4">

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl"
      >
        {/* 💻 Desktop View */}
        <div className="hidden md:block">
          <div className="bg-gray-800 p-4 rounded-t-2xl shadow-2xl border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <Computer className="text-gray-400 animate-pulse" size={20} />
              <div className="flex gap-2">
                <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-red-500" />
                <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-yellow-500" />
                <motion.div whileHover={{ scale: 1.2 }} className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-7 min-h-[300px] flex flex-col items-center justify-center border border-gray-700 shadow-inner">
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: [-1, 1, -1, 0],
                      transition: { duration: 0.2 }
                    }}
                    className="flex flex-col items-center text-purple-400 font-bold text-sm bg-gray-800/80 px-4 py-2 rounded-lg border border-purple-500/20 shadow-lg backdrop-blur-sm"
                  >
                    {skill.icon}
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-gray-800 h-16 mx-auto w-28 rounded-b-lg shadow-xl border-x border-b border-gray-700" />
          <div className="bg-gray-700 h-3 mx-auto w-72 rounded-lg shadow-xl" />
        </div>

        {/* 📱 Mobile View */}
        <div className="block md:hidden">
          <div className="bg-gray-800 p-2 rounded-3xl shadow-2xl border border-gray-700 w-72 mx-auto">
            <div className="flex items-center justify-center mb-2">
              <Smartphone className="text-gray-400 animate-pulse" size={24} />
            </div>
            <div className="bg-gray-900 rounded-xl p-4 min-h-[400px] flex flex-col items-center justify-center border border-gray-700 shadow-inner overflow-y-auto">
              <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: [-1, 1, -1, 0],
                      transition: { duration: 0.2 }
                    }}
                    className="flex flex-col items-center text-purple-400 font-bold text-xs bg-gray-800/80 px-3 py-2 rounded-lg border border-purple-500/20 shadow-md backdrop-blur-sm"
                  >
                    {skill.icon}
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillShowcase;
