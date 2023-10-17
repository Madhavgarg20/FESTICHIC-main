// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdSrhkHa6a4OFOfitVyozzxHCpgCGLuSA",
    authDomain: "festichic-11563.firebaseapp.com",
    projectId: "festichic-11563",
    storageBucket: "festichic-11563.appspot.com",
    messagingSenderId: "60670872951",
    appId: "1:60670872951:web:6edcd024f9e39bb65d6572"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }