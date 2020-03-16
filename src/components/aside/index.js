import React from "react";
import './index.css';
import Notebooks from '../notebooks';
import Labels from '../labels';
import Notes from '../notes';
import { Link } from "@reach/router";
import {selectNavigateThrough} from '../../dataLayer/selectors/route';
import {useSelector} from "react-redux";

export default function () {
    const modifier = useSelector(selectNavigateThrough);
    let ribbonCls = 'component_aside-ribbon';

    ribbonCls = `${ribbonCls} ${ribbonCls}--${modifier}`;

    // @todo disable currently used link
    return (
        <div className="component_aside">
            <div className="component_aside-navigation">
                <Link to={"/notebooks"} className="component_aside-notebooks">Notebooks</Link>
                &nbsp; | &nbsp;
                <Link to={"/labels"}>Labels</Link>
                &nbsp; | &nbsp;
                <Link to={"/notes"}>Notes</Link>
            </div>
            <div className="component_aside-viewport">
                <div className={ribbonCls}>
                    <Notebooks />
                    <Labels/>
                    <Notes/>
                </div>
            </div>
        </div>
    );
}
