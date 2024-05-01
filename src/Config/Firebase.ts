// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt-3XKpKFrMwADqFip6sZkCeyEX-nuAzo",
  authDomain: "my-react-app-77b8b.firebaseapp.com",
  projectId: "my-react-app-77b8b",
  storageBucket: "my-react-app-77b8b.appspot.com",
  messagingSenderId: "171181285288",
  appId: "1:171181285288:web:321a636612d83f770e479d",
  measurementId: "G-VDN85V66YE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
