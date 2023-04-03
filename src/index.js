import { initializeApp } from 'firebase/app';
import addItem from './add-todo-project-note';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBdpLHewngFeVZiPiI1G4BSyPPMQNJu-lY',
  authDomain: 'todo-list-e9fb4.firebaseapp.com',
  databaseURL: 'https://todo-list-e9fb4-default-rtdb.firebaseio.com',
  projectId: 'todo-list-e9fb4',
  storageBucket: 'todo-list-e9fb4.appspot.com',
  messagingSenderId: '650669944812',
  appId: '1:650669944812:web:34136bfe220a35f3a31ac9',
  measurementId: 'G-VENS6MC5TP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

addItem();
