// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaHz8eFLp2RWpk4NddTn1-X4Ojj1WR4B4",
  authDomain: "restoresa-65368.firebaseapp.com",
  projectId: "restoresa-65368",
  storageBucket: "restoresa-65368.appspot.com",
  messagingSenderId: "255475865993",
  appId: "1:255475865993:web:c13ded1b0c174946952958",
  measurementId: "G-YFZK1YT2YF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
