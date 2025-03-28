import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Widget from "../widgets/Widget";

const Hero: React.FC = () => {
  return (
    <div className="w-full md:h-screen flex flex-wrap justify-center items-center text-center text-white overflow-hidden" id="Home">
      {/* Background Image */}
      <div className="my-2">
        <Widget />
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-1/2 px-4 md:px-8 lg:px-12 text-left">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500"
        >
          Join the Future of Decentralized Finance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8"
        >
          Be part of the revolution with $TranscandenceAI. Invest in the next generation of blockchain technology and secure your financial freedom today.
        </motion.p>

        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-300">
            Get Started <FaArrowRight className="ml-2" />
          </button>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Hero;