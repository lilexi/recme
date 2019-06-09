import React from 'react';
import "./trand_item.modules.css"
import likeOFF from "../../assets/likeOFF.svg";

function TrandItem(props) {
    return (

        <div className="trand-item">
            <div className="category-logo-trand">
                <img src={props.category_logo_trand} alt="c_logo"/>
            </div>
            <div className="title-trand"> {props.title_trand} </div>
            <div className="like-trand">
                <img src={likeOFF} alt="like"/>
            </div>
            <div className="count-like-trand" > {props.count_like_trand} </div>
        </div>
    )
}

export default TrandItem;