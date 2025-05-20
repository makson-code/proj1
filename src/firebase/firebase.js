import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIguxbWxDrCJMHbdSutB4aFbHJpGib1DQ",
  authDomain: "maxim-921ca.firebaseapp.com",
  projectId: "maxim-921ca",
  storageBucket: "maxim-921ca.appspot.com",
  messagingSenderId: "931774924302",
  appId: "1:931774924302:web:8f108cf61489c1ddae1e5f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
