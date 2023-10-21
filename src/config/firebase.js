// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV3Ct2icVwSDiUKvubescMi9gFkCPt5gQ",
  authDomain: "bloodbankapp-25767.firebaseapp.com",
  databaseURL: "https://bloodbankapp-25767-default-rtdb.firebaseio.com",
  projectId: "bloodbankapp-25767",
  storageBucket: "bloodbankapp-25767.appspot.com",
  messagingSenderId: "986485101602",
  appId: "1:986485101602:web:0e4efecc9e30319487a67b",
  measurementId: "G-TQDRTFV6FD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
