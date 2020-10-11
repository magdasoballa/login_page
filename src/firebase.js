import firebase from 'firebase';

const config ={
    apiKey: "AIzaSyBcx_ziUU5Epnoa9J8cEh6EMU5ReM4mX8s",
    authDomain: "login-application-340b7.firebaseapp.com",
    databaseURL: "https://login-application-340b7.firebaseio.com",
    projectId: "login-application-340b7",
    storageBucket: "login-application-340b7.appspot.com",
    messagingSenderId: "84107973845",
    appId: "1:84107973845:web:9d98e1813f7b27041fbe5c"
}
firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();






