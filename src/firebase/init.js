 import firebase from 'firebase'
 import firestore from 'firebase/firestore'
 
 // Initialize Firebase
  var config = {
    apiKey: "REMOVED",
    authDomain: "udemy-ninja-smoothies-4ff9d.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-4ff9d.firebaseio.com",
    projectId: "udemy-ninja-smoothies-4ff9d",
    storageBucket: "udemy-ninja-smoothies-4ff9d.appspot.com",
    messagingSenderId: "536512968394"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true }) //for when an error is shown in the console
//  export firestore database
export default firebaseApp.firestore()