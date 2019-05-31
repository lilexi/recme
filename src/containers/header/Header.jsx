import React, {Component} from 'react';

import logo from '../../assets/Group.png';

// import components
import Menu from "../../components/menu/menu";
import Search from "../../components/search/search";
import Profile from "../../components/profile/profile";
// import style
import './header.modules.css';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="logo">
                    <img src={logo} alt='logo'/>
                </div>

                <Menu/>
                <Search/>
                <Profile/>
            </div>
        );
    }
}

export default Header;

