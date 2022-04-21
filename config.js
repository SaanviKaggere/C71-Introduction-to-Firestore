import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyBZJyIVUuvdKPI2ajAk08ixJ1hy-jv93eQ",
    authDomain: "e-library-ed2f8.firebaseapp.com",
    projectId: "e-library-ed2f8",
    storageBucket: "e-library-ed2f8.appspot.com",
    messagingSenderId: "990678911616",
    appId: "1:990678911616:web:58560834e4fe10b2bb7465"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();