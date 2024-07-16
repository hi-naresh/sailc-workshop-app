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
        <header className="bg-amber-50 text-black py-4">
            <div className="md:px-20 xs:px-8 mx-auto flex justify-between items-center px-4">
                <Link to="/" className="flex gap-4 items-center text-2xl font-bold">
                    <img className={"w-10 h-10"} src={"/sicon.svg"}/>
                </Link>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
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
