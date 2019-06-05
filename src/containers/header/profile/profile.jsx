import React, {Component} from 'react';
import "./profile_cont.modules.css"
import Profile from "../../../components/profile/profile"
import avatar from "../../../assets/avatar.svg"

class ProfileCont extends Component {
    constructor() {
        super();
        this.state = {
            name : "lil_exi",
            karma : 100
        };
    }

    render() {
        return (
            <div className="Profile">
            <Profile
                avatar = {avatar}
                name = {this.state.name}
                info = {this.state.karma}
            />
            </div>
        )
    }
}

export default ProfileCont;