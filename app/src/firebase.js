import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBtsj9Kq5ZohWDmwwKlSfNvtolau-nu2ak",
    authDomain: "linkdin-clone-fd4ff.firebaseapp.com",
    projectId: "linkdin-clone-fd4ff",
    storageBucket: "linkdin-clone-fd4ff.appspot.com",
    messagingSenderId: "857804510082",
    appId: "1:857804510082:web:711e95956e661149ad359b",
    measurementId: "G-WJCEY2YD1C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storege = firebase.storage();

  export {auth,provider,storege};
  export default db;