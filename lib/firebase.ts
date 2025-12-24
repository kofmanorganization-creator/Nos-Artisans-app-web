
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuration Firebase (Placeholder pour l'environnement de développement)
const firebaseConfig = {
  apiKey: "placeholder-api-key",
  authDomain: "nos-artisans-2.firebaseapp.com",
  projectId: "nos-artisans-2",
  storageBucket: "nos-artisans-2.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
