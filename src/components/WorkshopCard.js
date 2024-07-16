import React, { useState } from 'react';
import RegisterPopup from './RegisterPopup';

const WorkshopCard = ({ workshop }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-w-2xl mx-4 my-4 bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={workshop.image} alt={workshop.title} />
            <div className="p-4">
                <h3 className="text-2xl font-bold">{workshop.title}</h3>
                <p className="mt-2 text-gray-600">{workshop.brief}</p>
                <button
                    onClick={() => setIsOpen(true)}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded"
                >
                    Register
                </button>
            </div>
            {isOpen && <RegisterPopup workshop={workshop} onClose={() => setIsOpen(false)} />}
        </div>
    );
};

export default WorkshopCard;
