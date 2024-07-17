import React, { useState, useEffect } from 'react';
import RegisterPopup from './RegisterPopup';
import { useAuth } from '../contexts/AuthContext';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const WorkshopCard = ({ workshop }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const { currentUser } = useAuth();
    const db = getFirestore();

    useEffect(() => {
        const checkRegistration = async () => {
            if (currentUser) {
                const userDocRef = doc(db, 'users', currentUser.uid);
                const userDoc = await getDoc(userDocRef);

                if (userDoc.exists() && userDoc.data().workshopId) {
                    setIsRegistered(true);
                }
            }
        };

        checkRegistration();
    }, [currentUser, db]);

    return (
        <div className="min-w-2xl mx-4 my-4 bg-primary/30 shadow-md rounded-2xl overflow-hidden">
            <img className="w-full h-64 object-cover" src={workshop.image} alt={workshop.title} />
            <div className="p-4">
                <h3 className="text-2xl font-bold">{workshop.title}</h3>
                <p className="mt-2 text-gray-600">{workshop.brief}</p>
                <p>
                    <span className="font-bold">Capacity:</span> {"0/" + workshop.capacity}
                </p>
                <div className="flex justify-center items-center">
                    <button
                        onClick={() => setIsOpen(true)}
                        className={`w-full mt-4 px-4 py-4 text-lg text-white font-bold rounded-2xl ${isRegistered ? 'bg-gray-400' : 'bg-primary'}`}
                        disabled={isRegistered}
                    >
                        {isRegistered ? 'Registered' : 'Register'}
                    </button>
                </div>
            </div>
            {isOpen && <RegisterPopup workshop={workshop} onClose={() => setIsOpen(false)} />}
        </div>
    );
};

export default WorkshopCard;
