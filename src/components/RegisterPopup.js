import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useFirebase } from '../hooks/useFirebase';

const RegisterPopup = ({ workshop, onClose }) => {
    const [name, setName] = useState('');
    const [school, setSchool] = useState('');
    const [number, setNumber] = useState('');
    const { registerForWorkshop } = useFirebase();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await registerForWorkshop({ name, school, number, workshopId: workshop.id });
        onClose();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark bg-opacity-90 flex items-center space-y-8 xs:px-10 justify-center"
        >
            <div className="bg-dark/70 backdrop-blur-3xl p-8 rounded-3xl">
                <h3 className="text-2xl text-white text-center py-4 font-bold mb-4">Register for<br/> {workshop.title}
                </h3>
                <form className={"pt-4"} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="w-full p-2 mb-4 border border-gray-300 rounded-3xl"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        className="w-full p-2 mb-4 border border-gray-300 rounded-3xl"
                        placeholder="School of Field"
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        className="w-full p-2 mb-4 border border-gray-300 rounded-3xl"
                        placeholder="99999 55555"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full mt-4 bg-primary text-white font-bold py-3 rounded-3xl"
                    >
                        Register
                    </button>
                </form>
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

export default RegisterPopup;
