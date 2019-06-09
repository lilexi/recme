import React, {Component} from 'react';
import { Route, Link} from 'react-router-dom';
import './menu.modules.css';
import icon from "../../assets/menu_icon.png"
import icon2 from "../../assets/menu_icon_2.svg"
import Post from "../post/Post";
class Menu extends Component {
    state = {
        showMenu: false,
    };
    enter = () => {
        this.setState({showMenu: true});
    };
    leave = () => {
        this.setState({showMenu: false});
    };

    render() {
        return (
            <div className="menu" onClick={this.enter} onMouseLeave={this.leave}>
                <div className="btn-menu">
                    <img className="icon-menu" src={icon} alt=""/>
                    <p>ГЛАВНАЯ СТРАНИЦА</p>
                    <img className="icon-menu-2" src={icon2} alt=""/>
                </div>
                {this.state.showMenu ? <nav>
                    <ul>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li><Link to="/"> ГЛАВНАЯ СТРАНИЦА </Link></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li><Link to="/post/id"> ПРОСМОТР </Link></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li><a href="">УДИВИ МЕНЯ</a></li>
                    </ul>
                </nav> : null}
            </div>
        );
    }
}

export default Menu;

