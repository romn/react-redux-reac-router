import React from 'react';
import SignIn from '../signIn';
import './index.css';
import {useSelector} from "react-redux";
import {selectIsSignedIn, selectUserEmail} from "../../dataLayer/selectors/auth";

export default () => {
    const isSignedIn = useSelector(selectIsSignedIn);
    const userEmail = useSelector(selectUserEmail);

    return (

<div className="component_status">{isSignedIn ?
    userEmail : (
    <SignIn/>)}
</div>

    );
}
