import React from "react";
import './index.css';
import {Link} from "@reach/router";
import {useSelector} from "react-redux";
import {selectNotebooks} from "../../dataLayer/selectors/notebook";

export default function () {
    const notebooks = useSelector(selectNotebooks);

    return (
        <div className="component_notebookList">{notebooks.map((nb) =>
            <Link to={`/notebooks/${nb.id}`} key={nb.id}>{nb.name}</Link>)}
        </div>
    );
}
