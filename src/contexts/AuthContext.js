import React, { createContext, useState, useEffect, useContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBJTd9-a8yMatDL4q-UktyNEzYKYIsjdlI",
    authDomain: "sailc-work.firebaseapp.com",
    projectId: "sailc-work",
    storageBucket: "sailc-work.appspot.com",
    messagingSenderId: "269578704379",
    appId: "1:269578704379:web:9bb237d5215fa59c89e75e",
    measurementId: "G-L7ZK6SZB54"
};

const app = initializeApp(firebaseConfig);

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, [auth]);

    const value = {
        currentUser,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
