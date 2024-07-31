import React, { useEffect, useState, useCallback } from 'react';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import AnimatedButton from "../components/AnimatedButton";
import {useFirebase} from "../hooks/useFirebase";

const MyWorkshops = () => {
    const [user, setUser] = useState(null);
    const { getUserWorkshops, userWorkshops, loading } = useFirebase();
    const auth = getAuth();

    const fetchWorkshops = useCallback(async (userId) => {
        await getUserWorkshops(userId);
    }, [getUserWorkshops]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                fetchWorkshops(currentUser.uid);
            }
        });

        return () => unsubscribe();
    }, [auth, fetchWorkshops]);

    const handleLogout = async () => {
        await signOut(auth);
        // window.location.reload(); // Reload to reset state
    };

    const handleLogin = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
    };

    return (
        <div className="h-screen">
            <div>
                <img className={"-z-10 absolute top-0 h-40 object-cover w-full"} src={"/images/head1.svg"} alt={"head"} />
            </div>
            <div className="max-w-4xl items-center z-10 text-center">
                {user ? (
                    <div>
                        <div className="mb-10 pt-10">
                            <img
                                src={user.photoURL}
                                alt="User Profile"
                                className="p-1 mx-auto border-4 border-primary rounded-full w-24 h-24"
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
                        {loading ? (
                            <p>Loading your workshop details...</p>
                        ) : userWorkshops ? (
                            <div className="workshop-card bg-white mx-6 shadow-md rounded-lg p-6">
                                <h3 className="text-xl font-bold">Workshop Registered</h3>
                                <p className="mt-2">You are registered for the workshop: <strong>{userWorkshops.workshopTitle}</strong></p>
                                <p className="mt-2">Registration ID: <strong>{`workshop-${userWorkshops.registrationId}`}</strong></p>
                                <p className="mt-2">Workshop Details: <strong>{userWorkshops.workshopDetails}</strong></p>
                            </div>
                        ) : (
                            <p>You are logged in.</p>
                        )}
                    </div>
                ) : (
                    <div className={"pt-8 flex flex-col items-center"}>
                        <img src={"/images/avatar-person.svg"} alt={"avatar"}
                             className={"w-24 mb-12 p-0.5 border-4 border-primary rounded-full text-primary h-24"}/>
                        <h1 className={"text-center pt-8 text-4xl mb-4 font-bold text-stroke-dark"}>My Profile</h1>

                        <p className={"text-gray-500 px-8 mb-8"}>
                            Please login to view your profile and your opted workshop.
                        </p>
                        <AnimatedButton>
                            <div
                                onClick={handleLogin}
                                className={"text-white text-lg font-bold"}>
                                Login
                            </div>
                        </AnimatedButton>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyWorkshops;
