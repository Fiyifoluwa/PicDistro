import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBRSTFF3rj5o5_lWpGzlmBgkRXAeS0vycc",
  authDomain: "picdistro-4e724.firebaseapp.com",
  projectId: "picdistro-4e724",
  storageBucket: "picdistro-4e724.appspot.com",
  messagingSenderId: "865854966704",
  appId: "1:865854966704:web:ee85d6900e598c8b292475"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};