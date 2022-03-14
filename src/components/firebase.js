import firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDj9eqZwsgqgG1cT0iTQ0RuwdEZNCYtNfY",
  authDomain: "movie-hub-82497.firebaseapp.com",
  projectId: "movie-hub-82497",
  storageBucket: "movie-hub-82497.appspot.com",
  messagingSenderId: "62112744534",
  appId: "1:62112744534:web:6d02aec63945aae5bda7f7",
  measurementId: "G-82DEXDK6F1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
