// import { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, collection, getDocs } from 'firebase/firestore';
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

const useFirebase = () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result.user;
    };
    const registerForWorkshop = async ({ name, school, number, workshopId, workshopTitle, registrationId }) => {
        const user = auth.currentUser;
        if (!user) {
            throw new Error('User is not authenticated');
        }

        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            throw new Error('You are already registered for a workshop');
        }

        await setDoc(userDocRef, { name, school, number, email: user.email, workshopId, workshopTitle, registrationId });
    };

    const getWorkshops = async () => {
        const q = collection(db, 'workshops');
        const querySnapshot = await getDocs(q);
        const workshops = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('Workshops from Firestore:', workshops); // Debug log
        return workshops;
    };

    const getUserWorkshops = async (userId) => {
        const userDocRef = doc(db, 'users', userId);
        const userDoc = await getDoc(userDocRef);
        const userData = userDoc.exists() ? userDoc.data() : null;
        console.log('User Data from Firestore:', userData); // Debug log
        return userData;
    };

    const getUsers = async () => {
        const q = collection(db, 'users');
        const querySnapshot = await getDocs(q);
        const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('Users from Firestore:', users); // Debug log
        return users;
    };

    return { signInWithGoogle, registerForWorkshop, getWorkshops, getUserWorkshops, getUsers,auth };
};

export { useFirebase };