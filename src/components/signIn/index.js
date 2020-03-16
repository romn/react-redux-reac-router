import React, {useState} from 'react';
import * as firebase from "firebase/app";

export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        // @todo handle errors
        // @todo reflect status
        // @todo prevent double submit
        // @todo add signout and register flows
        firebase.auth().signInWithEmailAndPassword(email, password);
        event.preventDefault();
    };

    return (

<form onSubmit={handleSubmit}>
    <input name="email"
           onChange={e => setEmail(e.target.value)}
           value={email}
           required
           placeholder="Email"/>
    &nbsp;&nbsp;
    <input name="password"
           onChange={e => setPassword(e.target.value)}
           value={password}
           required
           placeholder="Password"
           type="password"/>
    <input value="Sign In" type="submit"/>
</form>
    );
}
