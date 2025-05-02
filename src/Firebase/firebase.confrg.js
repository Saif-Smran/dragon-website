// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE5MvxYEy21SCN2P5UT4tp8RRkLZrtBKo",
  authDomain: "the-dragon-news-f39c6.firebaseapp.com",
  projectId: "the-dragon-news-f39c6",
  storageBucket: "the-dragon-news-f39c6.firebasestorage.app",
  messagingSenderId: "562157618612",
  appId: "1:562157618612:web:bceced5d887d74a215dee1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;