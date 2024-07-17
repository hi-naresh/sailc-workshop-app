// import { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, collection, getDocs } from 'firebase/firestore';
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