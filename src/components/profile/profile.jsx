import React from 'react';
import './profile.modules.css';

function ProfileComp(props) {
    return (
        <div className="profile">
            <img src={props.avatar} alt=""/>
            <div className="user-info"><p>@{props.name}</p> <p>Рейтинг: {props.info}</p></div>
        </div>
    )
}

export default ProfileComp;

