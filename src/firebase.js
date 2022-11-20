
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBSt3ExIkxgM6wcqWXM3OTgOKLbjRkvtLc",
  authDomain: "portfolio-18ac4.firebaseapp.com",
  projectId: "portfolio-18ac4",
  storageBucket: "portfolio-18ac4.appspot.com",
  messagingSenderId: "147497681591",
  appId: "1:147497681591:web:f6f975430c741438710332",
  measurementId: "G-X0ZCJX2RFM"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);