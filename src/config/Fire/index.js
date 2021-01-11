import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBCr-bJaWdJXw-KiiEwPdVSjkvG3QH8suU",
  authDomain: "hellodoc-73f07.firebaseapp.com",
  projectId: "hellodoc-73f07",
  storageBucket: "hellodoc-73f07.appspot.com",
  messagingSenderId: "813647896845",
  appId: "1:813647896845:web:c5f318b20d01f0c69ad044",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Firebase = firebase;

export default Firebase;
