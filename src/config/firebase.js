import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1PVu_udEqP0NJdPHWc7CXXNpn_NNyw2w",
  authDomain: "ihiker.firebaseapp.com",
  databaseURL: "https://ihiker.firebaseio.com",
  projectId: "ihiker",
  storageBucket: "ihiker.appspot.com",
  messagingSenderId: "611940383878",
  appId: "1:611940383878:web:6fb1ff149b49fa717c2507",
  measurementId: "G-N7R1YPGT3M",
};

/* Intialize firebase app with configuration */
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

/* Google Authentication Provider  */
const provider = new firebase.auth.EmailAuthProvider()

export { auth, provider, db }
export default db 