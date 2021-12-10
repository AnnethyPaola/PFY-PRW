import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
   apiKey: "AIzaSyCQKuARZs3XjJfyQVauNG_8cREczpRwoWQ",
  authDomain: "pw-tarea5.firebaseapp.com",
  projectId: "pw-tarea5",
  storageBucket: "pw-tarea5.appspot.com",
  messagingSenderId: "44501454398",
  appId: "1:44501454398:web:1f0d2509d096e7dc480b6f"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;