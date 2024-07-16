import React from 'react';
import { motion } from 'framer-motion';
import WorkshopCard from '../components/WorkshopCard';
import workshopsData from '../data/workshopsData';

const Home = () => {
    return (
        <div>
            <section className="hero bg-blue-500 text-white text-center py-20">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <h1 className="text-5xl font-bold">SAILC Workshop</h1>
                    <p className="mt-4">Join our exciting workshops and enhance your skills!</p>
                    <button className="mt-8 px-4 py-2 bg-white text-blue-500 font-bold rounded">Get Started</button>
                </motion.div>
            </section>

            <section className="workshops py-20">
                <h2 className="text-3xl text-center mb-10">Workshops</h2>
                <div className={"flex justify-center"}>
                    <div className="grid xs:grid-cols-1 md:grid-cols-2 justify-center">
                        {workshopsData.map(workshop => (
                            <WorkshopCard key={workshop.id} workshop={workshop}/>
                        ))}
                    </div>
                </div>
            </section>

            {/*<footer className="bg-gray-800 text-white text-center py-4">*/}
            {/*    <p>Made for SAILC by Naresh Jhawar</p>*/}
            {/*</footer>*/}
        </div>
    );
};

export default Home;
