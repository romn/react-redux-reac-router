import {createSelector} from 'reselect';

const selectAuth = state => state.auth;
const selectUser = state => state.auth.user;

export const selectIsSignedIn = createSelector(
    selectAuth,
    auth => auth.isSignedIn
);

export const selectUserEmail = createSelector(
    selectUser,
    user => user ? user.email : null
);
