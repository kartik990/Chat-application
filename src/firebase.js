import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB9df2UlELZHHTfnt0VXFEOOhOKWgX3bLM",
  authDomain: "appp-7dda8.firebaseapp.com",
  projectId: "appp-7dda8",
  storageBucket: "appp-7dda8.appspot.com",
  messagingSenderId: "1015153470351",
  appId: "1:1015153470351:web:4280d5ae4d510ed9b7b9fa",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
