import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAPjkUVv-JQCbf_U1BI7aKNuUrTJdzUBuI",
    authDomain: "reactnativefirebase-8b3b5.firebaseapp.com",
    databaseURL: "https://reactnativefirebase-8b3b5.firebaseio.com",
    projectId: "reactnativefirebase-8b3b5",
    storageBucket: "reactnativefirebase-8b3b5.appspot.com",
    messagingSenderId: "1057924541325",
    appId: "1:1057924541325:web:8cd801d66a70445b50abc4",
    measurementId: "G-NS7KD529LJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};
