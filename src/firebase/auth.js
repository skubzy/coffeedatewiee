import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

export async function registerWithEmail({ name, email, password }) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  if (name) {
    // update display name
    await updateProfile(userCredential.user, { displayName: name });
  }
  return userCredential.user;
}

export async function loginWithEmail({ email, password }) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
}

export async function signInWithGoogle() {
  const result = await signInWithPopup(auth, provider);
  return result.user;
}

export async function logout() {
  await signOut(auth);
}

export default {
  registerWithEmail,
  loginWithEmail,
  signInWithGoogle,
  logout,
};
