import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQKuARZs3XjJfyQVauNG_8cREczpRwoWQ",
  authDomain: "pw-tarea5.firebaseapp.com",
  projectId: "pw-tarea5",
  storageBucket: "pw-tarea5.appspot.com",
  messagingSenderId: "44501454398",
  appId: "1:44501454398:web:1f0d2509d096e7dc480b6f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
