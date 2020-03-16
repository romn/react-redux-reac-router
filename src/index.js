// @todo consider properly naming files/default exported functions for easier search and refactoring

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import Layout from './components/layout';
import * as serviceWorker from './serviceWorker';
import store from './dataLayer';
import hookUpFirebase from './services/firebase';
import {Router} from "@reach/router";

hookUpFirebase();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Layout default/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

// @todo figure out wtf is that for and how it works
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
