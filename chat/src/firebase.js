// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0CjACSUUDRsN5zGcB9PNwZDB5ZRejMt4",
  authDomain: "chat-app-5c9b8.firebaseapp.com",
  projectId: "chat-app-5c9b8",
  storageBucket: "chat-app-5c9b8.appspot.com",
  messagingSenderId: "1055151446101",
  appId: "1:1055151446101:web:5440f339ba5ab7d8571cdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)