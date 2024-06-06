// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQsJtMGH_bJnPjDqCzRKeUX5-dD19GXAk",
  authDomain: "netflixgpt-cd91b.firebaseapp.com",
  projectId: "netflixgpt-cd91b",
  storageBucket: "netflixgpt-cd91b.appspot.com",
  messagingSenderId: "28145605251",
  appId: "1:28145605251:web:1ed87f9e95fd847b32d9b6",
  measurementId: "G-55KJZGZKX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();