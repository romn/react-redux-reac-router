import React from "react";
import './index.css';
import {useSelector} from "react-redux";
import {selectNoteContent} from "../../dataLayer/selectors/note";

export default function () {
    const content = useSelector(selectNoteContent);

    // @todo consider keeping last edited note in note area even if current route doesn't have note id
    // @todo conditionally render if there's no note corresponding to route
    return (
        <div className="component_note">
            {content}
        </div>
    );
};
