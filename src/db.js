import firebase from "firebase/app";
import "firebase/database";

const config = {
  // API keys
  apiKey: "AIzaSyDbTylDHBI3brKezJGsD6H4gwW76OIe1VM",

  authDomain: "chatfireapp-d9417.firebaseapp.com",

  projectId: "chatfireapp-d9417",

  storageBucket: "chatfireapp-d9417.appspot.com",

  messagingSenderId: "491439477738",

  appId: "1:491439477738:web:206a47f12cb5670582d893"

};

const db = firebase.initializeApp(config);
export default db;
