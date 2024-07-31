import React from 'react';
import { motion } from 'framer-motion';

const CustomPopup = ({ message, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed px-10 inset-0 bg-dark bg-opacity-90 flex items-center justify-center"
        >
            <div className="bg-dark/70 backdrop-blur-3xl p-8 rounded-3xl">
                <h3 className="text-2xl text-white text-center py-4 font-bold mb-4">Authentication Required</h3>
                <p className="text-white text-center mb-4">
                    {message}
                </p>
                <button
                    onClick={onClose}
                    className="w-full mt-4 bg-red-500 text-white font-bold py-3 rounded-3xl"
                >
                    Close
                </button>
            </div>
        </motion.div>
    );
};

export default CustomPopup;
