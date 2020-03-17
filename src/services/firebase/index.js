import firebaseConfig from './config';
import * as firebase from 'firebase/app';
import initAuth from './auth'

firebaseConfig.then(async response => {
    firebase.initializeApp(await response.json());
    initAuth();
});
