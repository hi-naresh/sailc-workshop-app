// import { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, collection, getDocs, query } from 'firebase/firestore';
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
const auth = getAuth(app);
const db = getFirestore(app);

export const useFirebase = () => {
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result.user;
    };

    const registerForWorkshop = async ({ name, school, number, email, workshopId }) => {
        const user = await signInWithGoogle();
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            throw new Error('You are already registered for a workshop');
        }

        await setDoc(userDocRef, { name, school, number, email, workshopId });
    };

    const getWorkshops = async () => {
        const q = query(collection(db, 'workshops'));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => doc.data());
    };

    const getUserWorkshops = async (userId) => {
        const userDocRef = doc(db, 'users', userId);
        const userDoc = await getDoc(userDocRef);
        return userDoc.exists() ? userDoc.data().workshopId : null;
    };

    return { signInWithGoogle, registerForWorkshop, getWorkshops, getUserWorkshops };
};
