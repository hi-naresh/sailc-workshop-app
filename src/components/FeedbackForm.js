import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import CustomPopup from "./CustomPopup";

const FeedbackForm = () => {
    const [fullName, setFullName] = useState('');
    const [score, setScore] = useState('');
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const { currentUser } = useAuth();
    const db = getFirestore();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!currentUser) {
            setShowPopup(true);
            return;
        }

        try {
            await addDoc(collection(db, 'feedbacks'), {
                fullName,
                score: parseInt(score),
                message,
                userId: currentUser.uid,
                email: currentUser.email,
                createdAt: new Date()
            });
            // alert('Thank you for your feedback!');
            CustomPopup(
                 "Thank you for your feedback!",
                () => setShowPopup(false)
            );
            setFullName('');
            setScore('');
            setMessage('');
        } catch (error) {
            console.error('Error submitting feedback: ', error);
            alert('Failed to submit feedback. Please try again.');
        }
    };
    
    return (
        <div className="max-w-xl mx-auto mt-10">
            <form
                onSubmit={handleSubmit}
                className="bg-white/30 backdrop-blur-lg p-6 rounded-3xl"
                style={{
                    background: 'rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                }}
            >
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700">Full Name</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        style={{
                            background: 'rgba(255, 255, 255, 0.3)',
                            border: '1px solid rgba(255, 255, 255, 0.18)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '25px',
                        }}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700">Score (out of 10)</label>
                    <input
                        type="number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                        min="0"
                        max="10"
                        required
                        style={{
                            background: 'rgba(255, 255, 255, 0.3)',
                            border: '1px solid rgba(255, 255, 255, 0.18)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '25px',
                        }}
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-gray-700">Feedback Message</label>
                    <textarea
                        className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        style={{
                            background: 'rgba(255, 255, 255, 0.3)',
                            border: '1px solid rgba(255, 255, 255, 0.18)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '25px',
                        }}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-4 bg-blue-500 text-white font-bold rounded-3xl hover:bg-blue-600 transition-colors"
                    style={{
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '25px',
                    }}
                >
                    Submit Feedback
                </button>
            </form>
            {showPopup && (
                <CustomPopup
                    message="You need to register yourself by clicking on the register button on the home page."
                    onClose={() => setShowPopup(false)}
                />
            )}
        </div>
    );
};

export default FeedbackForm;
