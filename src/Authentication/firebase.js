import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB7dNqjabIl2LKPHNM9Mwimd4GDK-JcYRo",
  authDomain: "authentication-3c951.firebaseapp.com",
  projectId: "authentication-3c951",
  storageBucket: "authentication-3c951.firebasestorage.app",
  messagingSenderId: "1017533633922",
  appId: "1:1017533633922:web:3a1bd63271a3e4f39e6b9b",
  measurementId: "G-9C9G0HGVDP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);