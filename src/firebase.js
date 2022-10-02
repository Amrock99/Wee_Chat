// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDDwX32x65ve4Aq5ruYeyTA7n4P_Th0mHE",
  authDomain: "my-first-project-bee9c.firebaseapp.com",
  projectId: "my-first-project-bee9c",
  storageBucket: "my-first-project-bee9c.appspot.com",
  messagingSenderId: "917724269702",
  appId: "1:917724269702:web:a904bf22ef5eee7d731507",
  measurementId: "G-9XP7G0HSW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const db = getFirestore(app);