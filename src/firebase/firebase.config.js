// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBo8k11Ah3Ei36ARgGHrYluldUWB6wfEZ4',
  authDomain: 'management-app-f9430.firebaseapp.com',
  projectId: 'management-app-f9430',
  storageBucket: 'management-app-f9430.appspot.com',
  messagingSenderId: '209668201052',
  appId: '1:209668201052:web:258985aed4cc0cea826499',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
