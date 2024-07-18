import React from 'react';
import { motion } from 'framer-motion';
import WorkshopCard from '../components/WorkshopCard';
import workshopsData from '../data/workshopsData';
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <section className="hero bg-secondary text-dark text-center py-20">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    <h1 className="text-5xl font-bold">Our Workshop</h1>
                    <p className="mt-4">Join our exciting workshops and enhance your skills!</p>
                </motion.div>
            </section>

            <section className="workshops py-20">
                <div className={"flex justify-center"}>
                    <div className="grid xs:grid-cols-1 md:grid-cols-2 justify-center">
                        {workshopsData.map(workshop => (
                            <WorkshopCard key={workshop.id} workshop={workshop}/>
                        ))}
                    </div>
                </div>
            </section>
            
            <Footer />

            {/*<footer className="bg-gray-800 text-white text-center py-4">*/}
            {/*    <p>Made for SAILC by Naresh Jhawar</p>*/}
            {/*</footer>*/}
        </div>
    );
};

export default Home;
