import React, {useEffect} from "react";
import './index.css';
import Aside from '../aside';
import {useLocation} from "@reach/router";
import Note from '../note';
import Status from '../status';
import {useSelector} from "react-redux";
import {selectIsSignedIn} from "../../dataLayer/selectors/auth";
import handleLocationChange from "../../services/route";

export default () => {
    const isSignedIn = useSelector(selectIsSignedIn);
    const location = useLocation();
    useEffect(() => handleLocationChange(location));

    return (

<div className="layout">
    <nav className="layout_nav"></nav>

    <div className="layout_mainRow">

        <main className="layout_main">{isSignedIn ? (
                <Note/>
            ) : null}
        </main>
        <aside className="layout_aside">{isSignedIn ? (
            <Aside/>) : null}
        </aside>

    </div>

    <footer className="layout_footer">
        <Status/>
    </footer>

</div>

    )
}
