import firebase from "firebase";
require("@firebase/firestore");

//MY FIREBASE LINK JUST IN CASE YOU NEED TO SEE
//https://console.firebase.google.com/project/pro-71-93426/firestore/data/~2Fbicycles~2FBICY001

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQcdR9lPKn3bxFREzILwtJ3tYquh0wI0Y",
    authDomain: "pro-71-93426.firebaseapp.com",
    projectId: "pro-71-93426",
    storageBucket: "pro-71-93426.appspot.com",
    messagingSenderId: "898421663953",
    appId: "1:898421663953:web:e9517f1f94e1e506af7df0"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
