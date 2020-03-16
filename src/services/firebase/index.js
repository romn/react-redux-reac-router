import firebaseConfig from './config';
import * as firebase from 'firebase/app';
import initAuth from './auth'

let INITIALIZED = false;

export default function hookUpFirebase () {
    if (INITIALIZED) {
        return;
    }

    INITIALIZED = undefined;

    firebase.initializeApp(firebaseConfig);
    initAuth();

    INITIALIZED = true;
}
