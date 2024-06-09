// -----------------------------------------------Contact Us-------------------------------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyAHtXGtm3nH5AX0-etyu1ika98a8jQf6Ls",
  authDomain: "govyapar-contact.firebaseapp.com",
  projectId: "govyapar-contact",
  storageBucket: "govyapar-contact.appspot.com",
  messagingSenderId: "483617697494",
  appId: "1:483617697494:web:f6cad01bfd4802df98a377",
  measurementId: "G-3SXF4W71SQ",
  databaseURL:"https://govyapar-contact-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const fireDb = initializeApp(firebaseConfig);

export default fireDb.database.ref()