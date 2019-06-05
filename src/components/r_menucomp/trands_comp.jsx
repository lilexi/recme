import React from 'react';
import "./trands_comp.modules.css"
import TrandItem from "./trand_item_comp"

function TrandComp(props) {
    return (
        <div className="trand-block">
            <p>ТРЕНДЫ </p>
            <TrandItem/>
            <TrandItem/>
            <TrandItem/>
            <TrandItem/>
            <TrandItem/>
        </div>
    )
}

export default TrandComp;