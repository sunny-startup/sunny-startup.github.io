// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-ob5AvHbCz6IKvtw8MCkGsNuMcN908T8",
  authDomain: "artiverse-440712.firebaseapp.com",
  projectId: "artiverse-440712",
  storageBucket: "artiverse-440712.firebasestorage.app",
  messagingSenderId: "1064456210195",
  appId: "1:1064456210195:web:c0208e7b16a5b47941bce6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, {
    experimentalForceLongPolling: false
}, 'artiversensqldb');