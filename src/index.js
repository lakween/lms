import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import firebase from 'firebase/compat/app';
import { Provider } from "react-redux";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import reportWebVitals from './reportWebVitals';
import firebaseConfig from "./firebase-config";

firebase.initializeApp(firebaseConfig)
firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
