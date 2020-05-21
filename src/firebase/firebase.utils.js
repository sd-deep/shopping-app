import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBUNOd2eCvU7Gy_KOQNxtlCtNxzUiv5COM",
    authDomain: "shopping-db-bacde.firebaseapp.com",
    databaseURL: "https://shopping-db-bacde.firebaseio.com",
    projectId: "shopping-db-bacde",
    storageBucket: "shopping-db-bacde.appspot.com",
    messagingSenderId: "242589812981",
    appId: "1:242589812981:web:eb755375255c42c5ba5dbc",
    measurementId: "G-WXKX888SJH"
  };

firebase.initializeApp(config);

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
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;