const firebase = require('firebase');

var firebaseConfig = {
    apiKey: process.env.FIREKEY,
    authDomain: process.env.FIREID + ".firebaseapp.com",
    databaseURL: "https://" + process.env.FIREID + ".firebaseio.com",
    projectId: process.env.FIREID,
    storageBucket: process.env.FIREID + ".appspot.com",
    messagingSenderId: "559703738837",
    appId: "1:559703738837:web:42fcb05dca55e61a4c155c",
    measurementId: "G-NWS1PBHFK7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
