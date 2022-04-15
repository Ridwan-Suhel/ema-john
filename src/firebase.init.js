// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD58ZyIMrUOcfMEzUfq_g9IzIAsRCy24Gc",
  authDomain: "emajohn-auth-d7430.firebaseapp.com",
  projectId: "emajohn-auth-d7430",
  storageBucket: "emajohn-auth-d7430.appspot.com",
  messagingSenderId: "406147536281",
  appId: "1:406147536281:web:191842e0cba8fb52c2ef08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
