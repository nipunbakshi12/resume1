import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show loader
        try {
            const response = await fetch('https://resume1-backend.onrender.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert("I'll get back to you shortly!");
                setFormData({ name: '', email: '' });
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setLoading(false); // Hide loader
        }
    };

    return (
        <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
                    Contact Me
                </h2>
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 space-y-6">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md dark:bg-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md dark:bg-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading} // Disable button while loading
                        className={`w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        {loading ? (
                            <svg
                                className="animate-spin h-5 w-5 mr-2 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                ></path>
                            </svg>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
