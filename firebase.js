// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTYN3G1VknUzyYxV1bEeS2VoPQ7sOgZ6w",
  authDomain: "joseffron.firebaseapp.com",
  projectId: "joseffron",
  storageBucket: "joseffron.appspot.com",
  messagingSenderId: "1046345696127",
  appId: "1:1046345696127:web:e87eefc03db7ebe206504a",
  measurementId: "G-R7543GSFSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);