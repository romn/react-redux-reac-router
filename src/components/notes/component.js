import React from "react";
import './component.css';
import {Link} from "@reach/router";

function Component({ note, labelId, notebookId }) {
    let basePath = (labelId ? `/labels/${labelId}` : `/notebooks/${notebookId}`);

    const noteNames = note.list.map((note, i) =>
        <Link to={`${basePath}/notes/${i}`} key={i}>{note.name}</Link>
    );

    return (
        <div className="component_noteList">{noteNames}</div>
    );
}

export default Component;
