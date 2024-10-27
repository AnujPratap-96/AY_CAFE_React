import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApi = process.env.REACT_APP_API_FIREBASE_KEY;

const firebaseConfig = {
  apiKey: `${firebaseApi}`,
  authDomain: "login-signup-aps.firebaseapp.com",
  projectId: "login-signup-aps",
  storageBucket: "login-signup-aps.appspot.com",
  messagingSenderId: "1056233231390",
  appId: "1:1056233231390:web:6c614b7e62ea3ace850a0f",
  measurementId: "G-5W4MHMEB6J",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // Initialize Firestore
