import { initializeApp, getApps } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGidwde8Hej3EObb28oT9-FWwRkvjXuZs",
  authDomain: "project-1-fe242.firebaseapp.com",
  projectId: "project-1-fe242",
  storageBucket: "project-1-fe242.appspot.com",
  messagingSenderId: "586654984876",
  appId: "1:586654984876:web:b01645f8dfdbf1628f8d09",
  measurementId: "G-VCE8N3GZ4D",
};

// Initialize Firebase App
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Auth with React Native Persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Export Firebase App and Auth
export { app, auth };
