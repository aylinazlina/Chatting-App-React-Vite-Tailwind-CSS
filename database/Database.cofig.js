// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxxk9ncCVCNTvzVPdmkZiA_VoTdj5Wd8c",
  authDomain: "chatting-app-a83d0.firebaseapp.com",
  projectId: "chatting-app-a83d0",
  storageBucket: "chatting-app-a83d0.firebasestorage.app",
  messagingSenderId: "82989350587",
  appId: "1:82989350587:web:df7d0a99d6c33f5562339e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;