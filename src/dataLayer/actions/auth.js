export const SIGNED_IN = 'SIGNED IN';
export const SIGNED_OUT = 'SIGNED OUT';

export const signedIn = (user) => ({ type: SIGNED_IN, user });
export const signedOut = () => ({type: SIGNED_OUT});
