import firebase from "firebase";
console.log(firebase);

const firebaseConfig = {
  apiKey: "AIzaSyC-OInouHGGwqIXcLlLvsYQjWc9V1jhqE4",
  authDomain: "wdpresence-c27a3.firebaseapp.com",
  databaseURL: "https://wdpresence-c27a3.firebaseio.com",
  projectId: "wdpresence-c27a3",
  storageBucket: "wdpresence-c27a3.appspot.com",
  messagingSenderId: "952564917025",
  appId: "1:952564917025:web:eb994116928d6cd5569460",
  measurementId: "G-R0P1YSZD8V",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
