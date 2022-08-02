import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    // console.log('firebase initialized')
}

export const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: 'http://localhost:3000/admin',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        {
            provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            defaultCountry: 'IN'
        },
    ],
    callbacks: {
        signInSuccessWithAuthResult: () => true,
    },
};

export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const db = firebase.firestore()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp()
export const storage = firebase.storage()