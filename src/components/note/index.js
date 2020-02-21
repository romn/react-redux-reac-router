import React from "react";
import './index.css';
import {useSelector} from "react-redux";

export default function ({ noteId }) {
    const note = useSelector(state => state.note);
    const content = note.list.filter(note => note.id === noteId)[0].content;
    return (
        <div className="component_note">{content}</div>
    );
};
