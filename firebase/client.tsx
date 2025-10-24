// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPTR_2h-dHgMDkBEq-lyMZqg4b8fCkeok",
  authDomain: "interu-c4e76.firebaseapp.com",
  projectId: "interu-c4e76",
  storageBucket: "interu-c4e76.firebasestorage.app",
  messagingSenderId: "600636823",
  appId: "1:600636823:web:c83bcb80abf305047398d2",
  measurementId: "G-WYB29LGY4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);