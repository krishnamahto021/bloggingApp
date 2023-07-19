// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBPiGm-aeVtCJEwQl7LRWfBIFa0FVzQHQ",
  authDomain: "bloggingapp-196b0.firebaseapp.com",
  projectId: "bloggingapp-196b0",
  storageBucket: "bloggingapp-196b0.appspot.com",
  messagingSenderId: "428446888228",
  appId: "1:428446888228:web:08475cd60c3e2f729883b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);