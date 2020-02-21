import React from "react";
import './index.css';
import {Link} from "@reach/router";
import {useSelector} from "react-redux";

export default function ({ labelId, notebookId }) {
    const note = useSelector(state => state.note);
    let basePath = (labelId ? `/labels/${labelId}` : `/notebooks/${notebookId}`);

    const noteNames = note.list.map((note, i) =>
        <Link to={`${basePath}/notes/${i}`} key={i}>{note.name}</Link>
    );

    return (
        <div className="component_noteList">{noteNames}</div>
    );
}
