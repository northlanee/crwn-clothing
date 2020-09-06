import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
