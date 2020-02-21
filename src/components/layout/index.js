import React from "react";
import './index.css';
import Aside from '../aside'
import { Router } from "@reach/router";
import Note from '../note'

export default function () {
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
};
