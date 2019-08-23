import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFEZ6Jj4gFxF_Qj6m9SBY6570iW_JGQms",
  authDomain: "bakery-proj.firebaseapp.com",
  databaseURL: "https://bakery-proj.firebaseio.com",
  projectId: "bakery-proj",
  storageBucket: "",
  messagingSenderId: "961822601308",
  appId: "1:961822601308:web:a3926fc91d46615c"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.error(err);
    }
  }
  return userRef;
};
