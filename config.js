import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyBzhvZ6vlvy2JcabV5yMcAnI_XT41UTbAQ",
  authDomain: "todo-app-new-with-firestore.firebaseapp.com",
  projectId: "todo-app-new-with-firestore",
  storageBucket: "todo-app-new-with-firestore.appspot.com",
  messagingSenderId: "905553539459",
  appId: "1:905553539459:web:213c7535f0ed2aa415c6b6",
  measurementId: "G-KE0Y65KSWS"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);