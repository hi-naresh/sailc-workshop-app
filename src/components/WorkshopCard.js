import React, { useState } from 'react';
import RegisterPopup from './RegisterPopup';

const WorkshopCard = ({ workshop }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-w-2xl mx-4 my-4 bg-primary/30 shadow-md rounded-2xl overflow-hidden">
            <img className="w-full h-64 object-cover" src={workshop.image} alt={workshop.title} />
            <div className="p-4">
                <h3 className="text-2xl font-bold">{workshop.title}</h3>
                <p className="mt-2 text-gray-600">{workshop.brief}</p>
                <div className={"flex justify-between items-center"}>
                    <button
                        onClick={() => setIsOpen(true)}
                        className="mt-4 px-4 py-2 bg-shade text-white font-bold rounded-2xl"
                    >
                        Register
                    </button>
                    <p>
                        <span className="font-bold">Capacity:</span> {"0/"+workshop.capacity}
                    </p>
                </div>
            </div>
            {isOpen && <RegisterPopup workshop={workshop} onClose={() => setIsOpen(false)}/>}
        </div>
    );
};

export default WorkshopCard;
