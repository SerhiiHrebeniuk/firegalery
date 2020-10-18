import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDg8tYby_3MZU5MF-ZL0uh120rkHQmxY5E",
    authDomain: "firegalery.firebaseapp.com",
    databaseURL: "https://firegalery.firebaseio.com",
    projectId: "firegalery",
    storageBucket: "firegalery.appspot.com",
    messagingSenderId: "302695047001",
    appId: "1:302695047001:web:530769185aac076926f648"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };