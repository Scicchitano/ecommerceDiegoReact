import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCSavtnNdQE0sdvR8V4Yc-02I4UxjkabGQ",
  authDomain: "ecommercereact-71c95.firebaseapp.com",
  projectId: "ecommercereact-71c95",
  storageBucket: "ecommercereact-71c95.appspot.com",
  messagingSenderId: "421916568951",
  appId: "1:421916568951:web:ae8705dee5caa8ac5e0572",
  measurementId: "G-B6N7HK0J25"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);