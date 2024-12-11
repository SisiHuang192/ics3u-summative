import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Paste your firebaseConfig from Firebase Console here
const firebaseConfig = {
    apiKey: "AIzaSyDSalPKl9WqfuJiMPa8m6LkdELfhXHXuvA",
    authDomain: "summative-472c8.firebaseapp.com",
    projectId: "summative-472c8",
    storageBucket: "summative-472c8.firebasestorage.app",
    messagingSenderId: "481287341304",
    appId: "1:481287341304:web:6e547d3d99815a1873a70d"
  };


const config = initializeApp(firebaseConfig)
const auth = getAuth(config);
const firestore = getFirestore(config);

export { auth, firestore };