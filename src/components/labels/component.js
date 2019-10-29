import React from "react";
import './component.css';
import {Link} from "@reach/router";

function Component({ label }) {
    const labelNames = label.list.map((note, i) =>
        <Link to={`/labels/${i}`} key={i}>{note.name}</Link>
    );

    return (
        <div className="component_labelList">{labelNames}</div>
    );
}

export default Component;
