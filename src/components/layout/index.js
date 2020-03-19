import React from "react";
import './index.css';
import Aside from '../aside';
import Note from '../note';
import Status from '../status';
import {useSelector} from "react-redux";
import {selectIsSignedIn} from "../../dataLayer/selectors/auth";
import useRoute from "../../dataLayer/hooks/route";

export default () => {
    const isSignedIn = useSelector(selectIsSignedIn);
    useRoute();

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
