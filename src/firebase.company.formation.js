
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCyLFI9ZyXD7g8U71tknyvq6zAlleSPAa8",
  authDomain: "govyapar-companyformation.firebaseapp.com",
  databaseURL: "https://govyapar-companyformation-default-rtdb.firebaseio.com",
  projectId: "govyapar-companyformation",
  storageBucket: "govyapar-companyformation.appspot.com",
  messagingSenderId: "553753269811",
  appId: "1:553753269811:web:bc18f6d2653287d167b546",
  measurementId: "G-NXNW6ETK12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
