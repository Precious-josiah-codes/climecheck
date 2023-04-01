// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6rn6_EimgtzEstyZ7IFrVsctdxdXKgWM",
  authDomain: "climecheck-71fca.firebaseapp.com",
  projectId: "climecheck-71fca",
  storageBucket: "climecheck-71fca.appspot.com",
  messagingSenderId: "531424213005",
  appId: "1:531424213005:web:cc913735682fe7d99cfd44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
