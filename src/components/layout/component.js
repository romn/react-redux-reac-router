import React from "react";
import './component.css';
import Aside from '../aside/component'
import {Router} from "@reach/router";
import Note from '../note'

function Component() {
    return (
        <div className="layout">
            <nav></nav>
            <div className="layout_mainRow">
                <main>
                    <Router>
                        <Note path="/notebooks/:notebookId/notes/:noteId"/>
                        <Note path="/labels/:labelId/notes/:noteId"/>
                    </Router>
                </main>
                <Aside/>
            </div>
        </div>
    );
}

export default Component;
