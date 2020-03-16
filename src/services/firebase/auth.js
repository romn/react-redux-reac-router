import * as firebase from "firebase/app";
import 'firebase/auth';
import store from '../../dataLayer'
import {signedIn, signedOut} from '../../dataLayer/actions/auth';

// @todo be more specific on user format passed to action
export default function initAuth () {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            store.dispatch(signedIn({email: user.email}));
        } else {
            store.dispatch(signedOut());
        }
    },
    // @todo error handling
function (error) {console.log(error);});
}
