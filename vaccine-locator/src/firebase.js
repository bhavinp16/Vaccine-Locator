
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBfQ_QpR4sXchBCVPA1emgeg88R5zzt5DE",
    authDomain: "vaccine-tracker-16.firebaseapp.com",
    projectId: "vaccine-tracker-16",
    storageBucket: "vaccine-tracker-16.appspot.com",
    messagingSenderId: "386991776504",
    appId: "1:386991776504:web:4645e55a0462ab4d06110d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export default db;
export { auth };

