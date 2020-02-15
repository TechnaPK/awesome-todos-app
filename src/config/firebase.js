import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBXxOgN5v0TR6h6SC2nKvYzguOrGd1PVoQ",
    authDomain: "techna-learning.firebaseapp.com",
    databaseURL: "https://techna-learning.firebaseio.com",
    projectId: "techna-learning",
    storageBucket: "techna-learning.appspot.com",
    messagingSenderId: "968087181855",
    appId: "1:968087181855:web:81d1f9d1468f5f341e532a"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export {db}

export default firebase;