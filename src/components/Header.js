import React from 'react';
import { NavLink } from 'react-router-dom';

const FloatingNavbar = () => {

    const tabs = [
        { name: 'Home', link: '/' },
        { name: 'Profile', link: '/workshops' },
        { name: 'More', link: '/about' },
    ];

    return (
        <div
            id="app"
            className="fixed z-50 bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md flex justify-center items-center"
        >
            <ul className="relative w-full h-16 grid grid-cols-3 bg-dark bg-opacity-70 backdrop-blur-lg rounded-full shadow-lg">
                {tabs.map((tab, index) => (
                    <li
                        key={index}
                        className="relative flex justify-center items-center text-white font-bold cursor-pointer"
                    >
                        <NavLink
                            to={tab.link}
                            className={({ isActive }) =>
                                `relative z-10 px-4 py-4 rounded-full transition-colors duration-300 ${
                                    isActive ? 'bg-primary justify-center items-center flex mx-1 text-dark w-full' : 'text-white'
                                }`
                            }
                        >
                            {tab.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FloatingNavbar;
