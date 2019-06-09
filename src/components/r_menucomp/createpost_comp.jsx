import React from 'react';
import "./createpost_comp.modules.css"
import { Link } from 'react-router-dom'

// import img
import icon from "../../assets/create_post_ico.svg"
import img from "../../assets/r_cr_img.svg"
import logo from "../../assets/r_cr_logo.svg"

function CreatePostComp(props) {
    return (
        <Link to={'/createpost'}>
        <div className="create-post">
            <div className="top-img"><img src={img} alt=""/></div>
            <div className="logo-img"><img src={logo} alt=""/></div>
            <div className="btn" onClick={props.CreatePost} >
                <img className="icon" src={icon} alt="icon"/>
                <div className="btn-text">Создать пост</div>
            </div>
        </div>
        </Link>
    )
}

export default CreatePostComp;