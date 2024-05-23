import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUl08sgmfEu6fjfhyQ4A9l2af_mQBvJK8",

  authDomain: "alpro-module.firebaseapp.com",

  databaseURL:
    "https://alpro-module-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "alpro-module",

  storageBucket: "alpro-module.appspot.com",

  messagingSenderId: "722058900645",

  appId: "1:722058900645:web:896fa342a4db86a9c3494c",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
