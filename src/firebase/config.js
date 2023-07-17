// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCF1JC-cKu4I79jIwa2GcWPQqj0wc6AuJI",
    authDomain: "proyecto-react-73b70.firebaseapp.com",
    projectId: "proyecto-react-73b70",
    storageBucket: "proyecto-react-73b70.appspot.com",
    messagingSenderId: "692513255456",
    appId: "1:692513255456:web:6bacbca7defcab2d35cc45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

