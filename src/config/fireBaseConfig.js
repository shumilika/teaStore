
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRgHIx2vYZupO5JQPCguPseJfKdU3nmdU",
  authDomain: "teastorecatcarrot.firebaseapp.com",
  databaseURL: "https://teastorecatcarrot-default-rtdb.firebaseio.com",
  projectId: "teastorecatcarrot",
  storageBucket: "teastorecatcarrot.appspot.com",
  messagingSenderId: "919792306355",
  appId: "1:919792306355:web:d4a4449fb9492c418548c6",
  measurementId: "G-XRKZ1LC8V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
// const analytics = getAnalytics(app);