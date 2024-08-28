import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRoqFZm4arxmL-lW85cGhNUx1hmTvoXNk",
  authDomain: "portfolio-e32b6.firebaseapp.com",
  projectId: "portfolio-e32b6",
  storageBucket: "portfolio-e32b6.appspot.com",
  messagingSenderId: "626987148163",
  appId: "1:626987148163:web:beb9d26f086a94d3bb0cb6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
