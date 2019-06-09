import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/Group.svg';

// import components
import Menu from "../../components/menu/menu";
import Search from "../../components/search/search";
import Profile from "./profile/profile";
// import style
import './header.modules.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Link to={'/'}>
                <div className="logo">
                    <img src={logo} alt='logo'/>
                </div>
                </Link>

                <Menu/>
                <Search/>
                <Profile/>
            </div>
        );
    }
}

export default Header;

