import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDfcC_Ygaw0WG7OMnKijBCmQauPNa85teI",
  authDomain: "picdistro-e26a9.firebaseapp.com",
  projectId: "picdistro-e26a9",
  storageBucket: "picdistro-e26a9.appspot.com",
  messagingSenderId: "616633807856",
  appId: "1:616633807856:web:ef9e632f8369635b396335",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
