import React from "react";
import './index.css';
import {Link} from "@reach/router";
import {useSelector} from "react-redux";

export default function () {
    const notebook = useSelector(state => state.notebook);
    const notebookNames = notebook.list.map((note, i) =>
        <Link to={`/notebooks/${i}`} key={i}>{note.name}</Link>
    );

    return (
        <div className="component_notebookList">{notebookNames}</div>
    );
}
