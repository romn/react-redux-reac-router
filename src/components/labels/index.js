import React from "react";
import './index.css';
import {Link} from "@reach/router";
import {useSelector} from "react-redux";
import {selectLabels} from "../../dataLayer/selectors/label";

export default function () {
    const labels = useSelector(selectLabels);

    return (
        <div className="component_labelList">{labels.map((lb) =>
            <Link to={`/labels/${lb.id}`} key={lb.id}>{lb.name}</Link>)}
        </div>
    );
}
