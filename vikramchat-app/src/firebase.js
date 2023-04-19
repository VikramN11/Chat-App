// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOlxIhR5F0SfLhMvb0zYMVN072xUMAIRs",
  authDomain: "chat-4d3f5.firebaseapp.com",
  projectId: "chat-4d3f5",
  storageBucket: "chat-4d3f5.appspot.com",
  messagingSenderId: "937904141198",
  appId: "1:937904141198:web:073e22d188d31829042adf",
  measurementId: "G-E951V8FPD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);