// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo5ov9dxdP2IiH8uJKX2EEIAJ-Gg1u3oQ",
  authDomain: "squid-store-coderhouse.firebaseapp.com",
  projectId: "squid-store-coderhouse",
  storageBucket: "squid-store-coderhouse.appspot.com",
  messagingSenderId: "12376386803",
  appId: "1:12376386803:web:91165a0b58f6182cec1b86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);