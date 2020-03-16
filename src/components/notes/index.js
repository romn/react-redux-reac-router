import React from "react";
import './index.css';
import {Link} from "@reach/router";
import {useSelector} from "react-redux";
import {selectFilteredNotes} from "../../dataLayer/selectors/note";
// import {selectParent} from "../../dataLayer/selectors/route";


// @todo implement partial loading of notes and additional ahead of time loading on scroll
export default function () {
    const notes = useSelector(selectFilteredNotes);
    // const parent = useSelector(selectParent);

    return (
        <div className="component_noteList">
{/*
            <div className="component_noteList-parent">
                <Link to={}>{}</Link>
            </div>
*/}
            {notes.map((note) =>
            <Link to={note.link} key={note.id}>{note.name}</Link>)}
        </div>
    );
}
