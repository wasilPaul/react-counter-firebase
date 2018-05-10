import firebase from 'firebase'



const config = {
    apiKey: "AIzaSyC4z8ow8s5wko6yq6EdqF8z7O907Qu2OPk",
    authDomain: "isa-sandbox-learn.firebaseapp.com",
    databaseURL: "https://isa-sandbox-learn.firebaseio.com",
    projectId: "isa-sandbox-learn",
    storageBucket: "isa-sandbox-learn.appspot.com",
    messagingSenderId: "618143956724"
}
firebase.initializeApp(config)

export const database = firebase.database()