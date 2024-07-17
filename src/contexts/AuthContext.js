import React, { createContext, useState, useEffect, useContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCX4t7IjrIf3eK7nsxQP1WGZuD1ZM0fFzY",
    authDomain: "sailc-ws.firebaseapp.com",
    projectId: "sailc-ws",
    storageBucket: "sailc-ws.appspot.com",
    messagingSenderId: "991012987027",
    appId: "1:991012987027:web:8a942a070a120caa98ad66",
    measurementId: "G-FSWFCQTCFN"
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
