import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBCFWjc8C7joqIopO3RNxKKHLLYCft09Ps",
    authDomain: "fight-island.firebaseapp.com",
    databaseURL: "https://fight-island.firebaseio.com",
    projectId: "fight-island",
    storageBucket: "fight-island.appspot.com",
    messagingSenderId: "977033099159",
    appId: "1:977033099159:web:8abe7095b27c43981bf6d2",
    measurementId: "G-KQ7YW437NX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
console.log("yessss")
  firebase.database().ref().set("Hnji, Firebase connected!")