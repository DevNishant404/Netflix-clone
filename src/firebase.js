import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDUC5ZLCPFNehCP_5cbL0mho5fX0kJhyXI",
  authDomain: "netflix-clone-6ae79.firebaseapp.com",
  projectId: "netflix-clone-6ae79",
  storageBucket: "netflix-clone-6ae79.firebasestorage.app",
  messagingSenderId: "961502490822",
  appId: "1:961502490822:web:1980fed4943e90298027c7",
  measurementId: "G-BS8P9TV50M",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
   toast.error(error.code.split("/")[1].split('-').join(" "))
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split('-').join(" "))
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
