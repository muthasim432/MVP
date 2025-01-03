// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGidwde8Hej3EObb28oT9-FWwRkvjXuZs",
  authDomain: "project-1-fe242.firebaseapp.com",
  projectId: "project-1-fe242",
  storageBucket: "project-1-fe242.appspot.com", // Fixed storageBucket URL typo
  messagingSenderId: "586654984876",
  appId: "1:586654984876:web:b01645f8dfdbf1628f8d09",
  measurementId: "G-VCE8N3GZ4D", // This can remain; it will be ignored in React Native.
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Firebase Auth initialization

export { auth };
