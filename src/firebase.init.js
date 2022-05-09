// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxkM6qTlZU_io5ALNnSLgZFri4FbzEyYk",
  authDomain: "car-dealer-d2379.firebaseapp.com",
  projectId: "car-dealer-d2379",
  storageBucket: "car-dealer-d2379.appspot.com",
  messagingSenderId: "981498325548",
  appId: "1:981498325548:web:b38d6c29e503ff1de7bf89"
  // apiKey:process.env.REACT_APP_apiKey,
  // authDomain:process.env.REACT_APP_authDomain,
  // projectId:process.env.REACT_APP_projectId,
  // storageBucket:process.env.REACT_APP_storageBucket,
  // messagingSenderId:process.env.REACT_APP_messagingSenderId,
  // appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;