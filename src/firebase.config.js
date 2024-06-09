// -----------------------------------------------Affiliate-------------------------------------
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC4joKu4WkGA6y9i-rIXwUM7zMziDoPcTU",
  authDomain: "govyapar-affiliate.firebaseapp.com",
  projectId: "govyapar-affiliate",
  storageBucket: "govyapar-affiliate.appspot.com",
  messagingSenderId: "805412132200",
  appId: "1:805412132200:web:9eaa5f41ccfe0b966fb2dd",
  measurementId: "G-52DBM5P6PP",
  databaseURL:"https://govyapar-affiliate-default-rtdb.firebaseio.com",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const storage = getStorage(app);
export { app, auth };



// -----------------------------------------------Continue(Applicatuion form)-------------------------------------
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage"

// const firebaseConfig = {
//     apiKey: "AIzaSyBXYNbU_zVJfkP58uy0HrjN18A7hMznCqw",
//     authDomain: "govyapar-8c016.firebaseapp.com",
//     databaseURL: "https://govyapar-8c016-default-rtdb.firebaseio.com",
//     projectId: "govyapar-8c016",
//     storageBucket: "govyapar-8c016.appspot.com",
//     messagingSenderId: "891828011601",
//     appId: "1:891828011601:web:556f518675d0abf33cee70",
//     measurementId: "G-8SHQF80LMN"
// //   databaseURL: "https://govyapar-8c016-default-rtdb.firebaseio.com",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const storage = getStorage(app);

