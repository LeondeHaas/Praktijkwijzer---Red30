// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRWshnorCSsmOXw0hW7z6P3yc-PVzV9QM",
  authDomain: "red30-23b4a.firebaseapp.com",
  projectId: "red30-23b4a",
  storageBucket: "red30-23b4a.appspot.com",
  messagingSenderId: "1055884575546",
  appId: "1:1055884575546:web:42e783cacbd789d1f68603"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);