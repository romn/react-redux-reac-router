import React from "react";
import './component.css';
import Notebooks from '../notebooks';
import Labels from '../labels';
import Notes from '../notes';
import {Link, Router} from "@reach/router";

function Component() {
    const notebooks = "layout_aside-ribbon layout_aside-ribbon--notebooks";
    const labels = "layout_aside-ribbon layout_aside-ribbon--labels";
    const notes = "layout_aside-ribbon layout_aside-ribbon--notes";

    return (
        <aside className="layout_aside">
            <div className="layout_aside-navigation">
                <Link to={"/notebooks"}>Notebooks</Link>{" | "}
                <Link to={"/labels"}>Labels</Link>
            </div>
            <Router className="layout_aside-viewport">
                <Content default className={notebooks}/>
                <Content path="notebooks" className={notebooks}/>
                <Content path="labels" className={labels}/>
                <Content path="notebooks/:notebookId" className={notes}/>
                <Content path="notebooks/:notebookId/notes/:noteId" className={notes}/>
                <Content path="labels/:labelId" className={notes}/>
                <Content path="labels/:labelId/notes/:noteId" className={notes}/>
            </Router>
        </aside>
    );
}

function Content (props) {
    return (
        <div className={props.className}>
            <Labels/>
            <Notebooks />
            <Notes labelId={props['labelId']} notebookId={props['notebookId']}/>
        </div>
    );
}

export default Component;
