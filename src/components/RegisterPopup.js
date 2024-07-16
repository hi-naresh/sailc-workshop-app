import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useFirebase } from '../hooks/useFirebase';

const RegisterPopup = ({ workshop, onClose }) => {
    const [name, setName] = useState('');
    const [school, setSchool] = useState('');
    const [number, setNumber] = useState('');
    // const [email, setEmail] = useState('');
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
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
            <div className="bg-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Register for {workshop.title}</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        placeholder="School of Field"
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        className="w-full p-2 mb-4 border border-gray-300 rounded"
                        placeholder="Number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />
                    {/*<input*/}
                    {/*    type="email"*/}
                    {/*    className="w-full p-2 mb-4 border border-gray-300 rounded"*/}
                    {/*    placeholder="Email"*/}
                    {/*    value={email}*/}
                    {/*    onChange={(e) => setEmail(e.target.value)}*/}
                    {/*    required*/}
                    {/*/>*/}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 rounded"
                    >
                        Register
                    </button>
                </form>
                <button
                    onClick={onClose}
                    className="mt-4 w-full text-gray-500"
                >
                    Close
                </button>
            </div>
        </motion.div>
    );
};

export default RegisterPopup;
