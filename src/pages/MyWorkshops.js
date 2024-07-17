import React, { useEffect, useState } from 'react';
import {useFirebase}  from '../hooks/useFirebase';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';

const MyWorkshops = () => {
    const [workshop, setWorkshop] = useState(null);
    const [user, setUser] = useState(null);
    const { getUserWorkshops } = useFirebase();
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                const userId = currentUser.uid;
                const workshopDetails = await getUserWorkshops(userId);
                setWorkshop(workshopDetails);
            } else {
                setWorkshop(null);
            }
        });

        return () => unsubscribe();
    }, [auth, getUserWorkshops]);

    const handleLogout = async () => {
        await signOut(auth);
    };

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    };

    return (
        <div className="my-workshops xs:pt-10 md:pt-32">
            <div className="max-w-4xl mx-auto text-center">
                {user ? (
                    <div className="mb-10">
                        <img
                            src={user.photoURL}
                            alt="User Profile"
                            className="mx-auto rounded-full w-24 h-24"
                        />
                        <h3 className="text-2xl mt-4">{user.displayName}</h3>
                        <p className="text-xl mt-2">{user.email}</p>
                        <button
                            onClick={handleLogout}
                            className="mt-4 px-12 py-2 bg-red-500 text-white rounded-3xl"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={handleLogin}
                        className="mt-4 px-12 py-2 bg-blue-500 text-white rounded-3xl"
                    >
                        Login
                    </button>
                )}
                {workshop ? (
                    <div className="workshop-card bg-white mx-6 shadow-md rounded-lg p-6">
                        <h3 className="text-xl font-bold">Workshop Registered</h3>
                        <p className="mt-2">You are registered for the workshop: <strong>{workshop.workshopTitle}</strong></p>
                        <p className="mt-2">Registration ID: <strong>{`workshop-${workshop.registrationId}`}</strong></p>
                        <p className="mt-2">Workshop Details: <strong>{workshop.workshopDetails}</strong></p>
                    </div>
                ) : (
                    <p>You are not registered for any workshop.</p>
                )}
            </div>
        </div>
    );
};

export default MyWorkshops;
