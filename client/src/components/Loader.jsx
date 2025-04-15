import React from 'react';
import './loader.css'; // We'll add custom animation here

const Loader = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#212121] text-gray-400 font-poppins text-[25px] font-medium">
            <div className="bg-[#212121] px-8 py-4 rounded-2xl flex items-center gap-3 relative overflow-hidden">
                <p>loading</p>
                <div className="relative overflow-hidden h-10">
                    <div className="words relative z-10">
                        <span className="block h-full pl-2 text-[#956afa] animate-spin-text">PLEASE</span>
                        <span className="block h-full pl-2 text-[#956afa] animate-spin-text">WAIT</span>
                        <span className="block h-full pl-2 text-[#956afa] animate-spin-text">NIPUN</span>
                        <span className="block h-full pl-2 text-[#956afa] animate-spin-text">BAKSHI's</span>
                        <span className="block h-full pl-2 text-[#956afa] animate-spin-text">RESUME</span>
                    </div>
                    <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#212121] via-transparent to-[#212121] pointer-events-none" />
                </div>
            </div>
        </div>
    );
};

export default Loader;
