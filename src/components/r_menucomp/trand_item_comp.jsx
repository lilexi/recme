import React from 'react';
import {Link} from "react-router-dom";
import "./trand_item.modules.css"
import likeOFF from "../../assets/likeON.png";

function TrandItem(props) {
    return (
        <Link to={`/post/${props.trandID}`}>
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
        </Link>
    )
}

export default TrandItem;