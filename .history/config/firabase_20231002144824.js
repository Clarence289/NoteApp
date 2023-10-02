// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNVfyTmsS0sgIwyuVcWP52sPy9iMrS7Ag",
  authDomain: "note-53302.firebaseapp.com",
  projectId: "note-53302",
  storageBucket: "note-53302.appspot.com",
  messagingSenderId: "704169810641",
  appId: "1:704169810641:web:323fed5b9729b7349c03f0",
  measurementId: "G-V0EETQYLRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);