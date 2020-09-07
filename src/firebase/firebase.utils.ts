import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { User } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFKr_9m6W_GEi1l7qVEDr-zLU-w7RGUtg",
  authDomain: "crwn-db-ec261.firebaseapp.com",
  databaseURL: "https://crwn-db-ec261.firebaseio.com",
  projectId: "crwn-db-ec261",
  storageBucket: "crwn-db-ec261.appspot.com",
  messagingSenderId: "651629948345",
  appId: "1:651629948345:web:377fe09dab2eab1dd51a68",
  measurementId: "G-YK8ZK69XKL",
};

export const getUserProfileDocument = async (
  user: User,
  displayName?: string
) => {
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  const name = displayName || user.displayName;

  if (!snapshot.exists) {
    const { email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({ id: user.uid, displayName: name, email, createdAt });
    } catch (err) {
      console.log(err.message);
    }
  }

  return await userRef.get();
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
