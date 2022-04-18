// Conexión con firebase y firestore:

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcOzjOQv-_BKLpew4HlzbFMn00XmSMfYM",
  authDomain: "ohmychair-ecommerce.firebaseapp.com",
  projectId: "ohmychair-ecommerce",
  storageBucket: "ohmychair-ecommerce.appspot.com",
  messagingSenderId: "907141610708",
  appId: "1:907141610708:web:ee744e67614505fecccf41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db
