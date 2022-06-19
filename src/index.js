import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import firebase from 'firebase/compat/app';
import {Provider, useDispatch} from "react-redux";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import reportWebVitals from './reportWebVitals';
import firebaseConfig from "./firebase-config";
import {store} from "./store/store";
import {ChakraProvider, ColorModeProvider} from '@chakra-ui/react'
import {RouterConfig} from "./route-config";
import {BrowserRouter} from "react-router-dom";
import {theme} from "./chakra-theme";
import {getUsrType, login} from "./common/loging/actions/loging.action";

firebase.initializeApp(firebaseConfig)
firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ChakraProvider theme={theme}>
                    <RouterConfig/>
                </ChakraProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
