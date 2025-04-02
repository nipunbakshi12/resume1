import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importing motion
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// Skeleton Loader Component
const Skeleton = () => (
  <div className="w-full h-64 bg-gray-300 animate-pulse rounded-md" />
);

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true); // Loading state

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 3 seconds
    }, 1209);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  // Disable text selection and right-click
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault(); // Disable right-click menu
    };

    const handleSelectStart = (e) => {
      e.preventDefault(); // Disable text selection
    };

    document.addEventListener('contextmenu', handleContextMenu); // Disable right-click
    document.addEventListener('selectstart', handleSelectStart); // Disable text selection

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, []);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Staggered parent container */}
        <motion.div
          className="space-y-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3, // Stagger animation delay
              },
            },
          }}
        >
          {/* Hero section with individual animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {loading ? <Skeleton /> : <Hero />} {/* Show skeleton if loading */}
          </motion.div>

          {/* Projects section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {loading ? <Skeleton /> : <Projects />} {/* Show skeleton if loading */}
          </motion.div>

          {/* Skills section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {loading ? <Skeleton /> : <Skills />} {/* Show skeleton if loading */}
          </motion.div>

          {/* Contact section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {loading ? <Skeleton /> : <Contact />} {/* Show skeleton if loading */}
          </motion.div>

          {/* Footer section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {loading ? <Skeleton /> : <Footer />} {/* Show skeleton if loading */}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
