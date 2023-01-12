// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getFirestore} from "firebase/fireStore"
import {getStorage} from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyC8Lr4GBr56xotocmy05X7w2G4uw9CSdQ8",
  authDomain: "foodapp-c33b4.firebaseapp.com",
  projectId: "foodapp-c33b4",
  storageBucket: "foodapp-c33b4.appspot.com",
  messagingSenderId: "174578361147",
  appId: "1:174578361147:web:abb4db3d19d5c76c774d1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app)
const storage =getStorage(app)
export { db,storage}
