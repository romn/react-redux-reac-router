import React from "react";
import './component.css';
import Aside from '../aside/component'

function Component() {
    return (
        <div className="layout">
            <nav></nav>
            <div className="layout_mainRow">
                <main>
                </main>
                <Aside/>
            </div>
        </div>
    );
}

export default Component;
