import React from "react";
import './component.css';
import {Link} from "@reach/router";

function Component({ notebook }) {
    const notebookNames = notebook.list.map((note, i) =>
        <Link to={`/notebooks/${i}`} key={i}>{note.name}</Link>
    );

    return (
        <div className="component_notebookList">{notebookNames}</div>
    );
}

export default Component;
