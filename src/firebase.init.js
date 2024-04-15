// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8TClEcQI3340oph-pYsFrLaPtrfkncPI",
  authDomain: "gym-equipment-app.firebaseapp.com",
  projectId: "gym-equipment-app",
  storageBucket: "gym-equipment-app.appspot.com",
  messagingSenderId: "322629496564",
  appId: "1:322629496564:web:05424af127db8b4a8d38a1",
  measurementId: "G-R8YBSNFHNS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
