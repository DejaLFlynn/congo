import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDRCnQwK3tuBTqA5EoKtm08eHO6vDtQN6E",
    authDomain: "df--clone.firebaseapp.com",
    databaseURL: "https://df--clone.firebaseio.com",
    projectId: "df--clone",
    storageBucket: "df--clone.appspot.com",
    messagingSenderId: "754526414488",
    appId: "1:754526414488:web:de1c2d1b19320c1fb852ed",
    measurementId: "G-45LS1SR9DH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };