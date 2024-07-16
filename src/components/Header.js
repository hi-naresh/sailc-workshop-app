import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useFirebase } from '../hooks/useFirebase';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const auth = getAuth();
    const user = auth.currentUser;
    const { signInWithGoogle } = useFirebase();

    const handleLogin = async () => {
        await signInWithGoogle();
    };

    const handleLogout = async () => {
        await signOut(auth);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
                <Link to="/" className="text-2xl font-bold">SAILC Workshop</Link>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <nav className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
                    <Link to="/" className="block py-2 md:py-0 hover:underline">Home</Link>
                    <Link to="/about" className="block py-2 md:py-0 hover:underline">About</Link>
                    {user ? (
                        <>
                            <Link to="/my-workshops" className="block py-2 md:py-0 hover:underline">Profile</Link>
                            <button onClick={handleLogout} className="block py-2 md:py-0 hover:underline">Logout</button>
                        </>
                    ) : (
                        <button onClick={handleLogin} className="block py-2 md:py-0 hover:underline">Login</button>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
