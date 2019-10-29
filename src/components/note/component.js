import React from "react";
import './component.css';

function Component({ note, noteId }) {
    const content = note.list.filter(note => note.id === noteId)[0].content;
    return (
        <div className="component_note">{content}</div>
    );
}

export default Component;
