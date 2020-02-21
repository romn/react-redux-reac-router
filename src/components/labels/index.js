import React from "react";
import './index.css';
import {Link} from "@reach/router";
import {useSelector} from "react-redux";

export default function () {
    const label = useSelector(state => state.label);
    const labelNames = label.list.map((note, i) =>
        <Link to={`/labels/${i}`} key={i}>{note.name}</Link>
    );

    return (
        <div className="component_labelList">{labelNames}</div>
    );
}
