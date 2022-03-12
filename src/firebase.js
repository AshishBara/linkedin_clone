import {initializeApp} from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyCVCgmUBCWKwtBsKcxji22A_VbbYhchN8k",
    authDomain: "linkedin-clone-09.firebaseapp.com",
    projectId: "linkedin-clone-09",
    storageBucket: "linkedin-clone-09.appspot.com",
    messagingSenderId: "193244173203",
    appId: "1:193244173203:web:4365f10d8435f86dfe4e66"
  };


  const firebaseApp = initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();


  export { db, auth };