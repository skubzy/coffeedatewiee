// Firebase app initialization
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTRKLsUPamfEaSoAxFmAh48KLUQzOjFO4",
  authDomain: "coffeedateswie.firebaseapp.com",
  projectId: "coffeedateswie",
  storageBucket: "coffeedateswie.firebasestorage.app",
  messagingSenderId: "298286413930",
  appId: "1:298286413930:web:b61f966978cd06b5303213",
  measurementId: "G-KG8EY6FN44"
};

const app = initializeApp(firebaseConfig);
try {
  // Analytics may not be available in all environments
  getAnalytics(app);
} catch (e) {
  // ignore analytics errors in dev/server environments
}

const auth = getAuth(app);

export { app, auth };
