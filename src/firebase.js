import firebase from 'firebase'

const config = {
   apiKey: "AIzaSyCCtBGgJWJa0402SGX225csU2Foq5E84j4",
   authDomain: "jfddl4-sandbox.firebaseapp.com",
   databaseURL: "https://jfddl4-sandbox.firebaseio.com",
   projectId: "jfddl4-sandbox",
   storageBucket: "jfddl4-sandbox.appspot.com",
   messagingSenderId: "631328808238"
}

firebase.initializeApp(config)

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const auth= firebase.auth()  //export obiektu ktory pozwala na autoryzacje
export const database = firebase.database()