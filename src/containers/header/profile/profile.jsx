import React, {Component} from 'react';
import "./profile_cont.modules.css"
import Profile from "../../../components/profile/profile"
import avatar from "../../../assets/avatar.svg"
import {Link} from "react-router-dom";


import {connect} from "react-redux";
import * as actions from './../../../store/actions/index';
import axios from "axios";
import icon from "../../../assets/create_post_ico.svg";


class ProfileCont extends Component {
    constructor() {
        super();
        this.state = {
            user_id: 1,
            user_img: null,
            user_name: null,
            user_karma: null
        };
    }

    componentDidMount() {
        this.getProfile();
    }

    rProfile = () => {
        return (
            <Profile
                avatar={this.state.user_img}
                name={this.state.user_name}
                info={this.state.user_karma}
            />

        )
    };

    rButton = () => {
        return (
            <div className="btn-profile">
                <div className="btn-profile-reg">
                    <img className="icon-btn" src={icon} alt="icon"/>
                    <div className="btn-text">Регистрация</div>
                </div>
                <div className="btn-profile-login">
                    <img className="icon-btn" src={icon} alt="icon"/>
                    <div className="btn-text">Войти</div>
                </div>
            </div>

        )
    };

    getProfile = () => {
        axios.post('http://localhost:3001/getUser', {
            user_id: this.state.user_id
        })
            .then(res => {
                const user = res.data.user;
                user.map(item => {
                        if (item.id === 1) {
                            this.setState({user_img: avatar})
                        }
                        this.setState({user_name: item.name, user_karma: item.karma})
                    }
                );
            })
    };

    render() {
        return (
            <div className="Profile">
                {/*{this.rProfile()}*/}
                {this.state.user_id ? this.rProfile() : this.rButton()}
                {/*{this.props.user ?*/}
                {/*    <Link to={"/auth/auth"}><div className="auth"> Авторизация </div> </Link>:*/}
                {/*    <div className="reg-auth">*/}
                {/*        <Link to={"/auth/reg"}> <div className="reg"> Регистрация </div> </Link>*/}
                {/*        <Link to={"/auth/auth"}> <div className="auth"> Авторизация </div></Link>*/}
                {/*</div>}*/}
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         user: state.authReducer.user ? state.authReducer.user : null
//     }
// };
// const mapDispatchToProps = dispatch => {
//     return {
//         signUP: (userData) => dispatch(actions.signup(userData)),
//     }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ProfileCont);
export default ProfileCont;