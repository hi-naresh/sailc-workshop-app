import React from 'react';
import { motion } from 'framer-motion';
import FeedbackForm from "../components/FeedbackForm";

const Home = () => {
    return (
        <div>
            <section className="hero px-8 bg-secondary text-dark text-center py-20">
                <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
                    <h1 className="text-5xl text-gray-50 font-bold">Feedback</h1>
                    <p className="mt-4 text-gray-700">
                        Share your thoughts and feedback with us!
                    </p>
                    <p className="mt-4 text-gray-700">
                        Do register first to give feedback.
                    </p>
                </motion.div>
                <FeedbackForm/>
            </section>
        </div>
    );
};

export default Home;
