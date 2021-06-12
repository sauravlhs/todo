import firebase from "firebase"
const firebaseApp =firebase.initializeApp( {
    apiKey: "AIzaSyAQ9A2zXdCzzCgO1vb4ddGCR3jX2-7zDlo",
    authDomain: "todo-console-7cd4d.firebaseapp.com",
    databaseURL: "https://todo-console-7cd4d.firebaseio.com",
    projectId: "todo-console-7cd4d",
    storageBucket: "todo-console-7cd4d.appspot.com",
    messagingSenderId: "684556276259",
    appId: "1:684556276259:web:e7ee3c705226bcdc9b5796",
    measurementId: "G-1R1BZP5RNW"
});

  const db = firebaseApp.firestore();

export default db;