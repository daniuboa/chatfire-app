import firebase from "firebase/app";
import "firebase/database";

const config = {
  // API keys
  apiKey: "AIzaSyA2_9OLlv-B8zqFe42MkZitpWAE8nvWB_E",

  authDomain: "firechatapp-1fa3e.firebaseapp.com",

  projectId: "firechatapp-1fa3e",

  storageBucket: "firechatapp-1fa3e.appspot.com",

  messagingSenderId: "1008459532798",

  appId: "1:1008459532798:web:41d6e449703998e63cd8af",
};

const db = firebase.initializeApp(config);
export default db;
