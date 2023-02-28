// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0BssAv8wCzctMB3brSpEt2B5GyPBaWOM",
  authDomain: "climecheck-mvp.firebaseapp.com",
  projectId: "climecheck-mvp",
  storageBucket: "climecheck-mvp.appspot.com",
  messagingSenderId: "954749319912",
  appId: "1:954749319912:web:3d0ee3a9861775aa87a75d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
