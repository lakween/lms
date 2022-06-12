// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "lms-pro-cf49c.firebaseapp.com",
    projectId: "lms-pro-cf49c",
    storageBucket: "lms-pro-cf49c.appspot.com",
    messagingSenderId: "815260992853",
    appId: "1:815260992853:web:1894b21a4ca9fcd464dbdc",
    measurementId: "G-BLBQGWQ49G"
};

export default firebaseConfig
// Initialize Firebase