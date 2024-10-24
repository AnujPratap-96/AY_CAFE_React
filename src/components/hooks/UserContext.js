// UserContext.js
import { createContext, useState, useEffect } from "react";
import { auth, db } from "../Utility/firebase-Config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore"; // Import Firestore functions

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(''); // New state for username

  // Monitor user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Fetch username from Firestore when logging in
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setUsername(userDoc.data().name); // Set the username
        } else {
          console.log("No such document!");
        }
      } else {
        setUsername(null); // Reset username if user logs out
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Firebase login
  // Firebase login
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Login error", error.message);
      throw new Error(error.message); // Throw the error to be handled in Login.js
    }
  };

  // Firebase signup with name
  const signup = async (name, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
      });
      // Do not set username here to avoid showing it immediately
    } catch (error) {
      console.error("Signup error", error.message);
    }
  };

  // Firebase logout
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error", error.message);
    }
  };

  return (
    <UserContext.Provider value={{ user, username, login, signup, logout }}>
      {!loading && children}
    </UserContext.Provider>
  );
};
