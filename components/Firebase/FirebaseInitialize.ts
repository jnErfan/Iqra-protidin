import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./FirebaseConfig";
// Firebase Initialized
const FirebaseInitialize = () => {
  console.log('firebaseConfig',firebaseConfig);
  
  initializeApp(firebaseConfig);
};

export default FirebaseInitialize;
