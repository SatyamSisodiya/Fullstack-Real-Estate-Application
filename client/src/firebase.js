// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfPB9RryaqLKoNen8P1qZqHHI7YJ5E5x4",
  authDomain: "mern-estate-48c0f.firebaseapp.com",
  projectId: "mern-estate-48c0f",
  storageBucket: "mern-estate-48c0f.firebasestorage.app",
  messagingSenderId: "409559284710",
  appId: "1:409559284710:web:4ad7573d506540d5883427"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);