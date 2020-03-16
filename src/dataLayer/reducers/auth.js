import produce from 'immer';
import {SIGNED_IN, SIGNED_OUT} from "../actions/auth";
import initialState from '../initialState/auth'

// @todo review need to have initial signed in state as null
export default function (state = initialState, action) {
    if (action.type === SIGNED_IN) {
        return produce(state, draftState => {
            draftState.isSignedIn = true;
            draftState.user = {email: action.user.email};
        });
    } else if (action.type === SIGNED_OUT) {
        return produce(state, draftState => {
            draftState.isSignedIn = false;
        })
    } else {
        return state;
    }
}
