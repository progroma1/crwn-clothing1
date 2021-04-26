import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyD5sueW16ixKOwkadq3A--7I3TAChH15OE",
    authDomain: "crwn-db-869a7.firebaseapp.com",
    projectId: "crwn-db-869a7",
    storageBucket: "crwn-db-869a7.appspot.com",
    messagingSenderId: "907222529852",
    appId: "1:907222529852:web:5e63111caa5a015b005039"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  