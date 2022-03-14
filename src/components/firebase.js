import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDj9eqZwsgqgG1cT0iTQ0RuwdEZNCYtNfY",
  authDomain: "movie-hub-82497.firebaseapp.com",
  projectId: "movie-hub-82497",
  storageBucket: "movie-hub-82497.appspot.com",
  messagingSenderId: "62112744534",
  appId: "1:62112744534:web:6d02aec63945aae5bda7f7",
  measurementId: "G-82DEXDK6F1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, db };
export default db;