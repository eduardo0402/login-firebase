// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB42weXuzko-B0cFe6-w3oMw1h9oeIGEOc",
    authDomain: "react-proyect-login.firebaseapp.com",
    projectId: "react-proyect-login",
    storageBucket: "react-proyect-login.appspot.com",
    messagingSenderId: "108100446476",
    appId: "1:108100446476:web:57f99ce7ba96aa71c5c129"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)