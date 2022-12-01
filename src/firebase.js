import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmUrJqL6qsl-LzCEqzKuwBKqSchlmVhIg",
  authDomain: "multistepperapp.firebaseapp.com",
  projectId: "multistepperapp",
  storageBucket: "multistepperapp.appspot.com",
  messagingSenderId: "12173434970",
  appId: "1:12173434970:web:1ebf881b17f22674dab863",
  measurementId: "G-1QTECED65L"
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);