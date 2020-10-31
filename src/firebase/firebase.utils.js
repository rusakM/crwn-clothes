import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDWgrC2zb9tCFpgttKmp1kDsdfya0zV37c",
    authDomain: "crwn-db-31d20.firebaseapp.com",
    databaseURL: "https://crwn-db-31d20.firebaseio.com",
    projectId: "crwn-db-31d20",
    storageBucket: "crwn-db-31d20.appspot.com",
    messagingSenderId: "84980278287",
    appId: "1:84980278287:web:ce4a253a0f339e0978ef7a",
    measurementId: "G-5V492CH4TK"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
