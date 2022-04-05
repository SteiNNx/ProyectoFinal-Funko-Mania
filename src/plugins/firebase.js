import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAWTcFEdrFscqpjwJ_Cot6GzAshDWu7b0g",
    authDomain: "proyectofinal-funkomania.firebaseapp.com",
    projectId: "proyectofinal-funkomania",
    storageBucket: "proyectofinal-funkomania.appspot.com",
    messagingSenderId: "1036276609648",
    appId: "1:1036276609648:web:dc57e06f060a44a591bab5"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();