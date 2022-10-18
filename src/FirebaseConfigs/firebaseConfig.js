// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDRWsmE_ijYte-UPcwlxJOCbsi9fwRDpRM",
    authDomain: "petukji-454c4.firebaseapp.com",
    projectId: "petukji-454c4",
    storageBucket: "petukji-454c4.appspot.com",
    messagingSenderId: "813772658142",
    appId: "1:813772658142:web:75c03d1364e0d9eff3394f",
    // measurementId: "G-CGB6Y6GYQV"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)