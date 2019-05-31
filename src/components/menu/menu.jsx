import React, {Component} from 'react';
import './menu.modules.css';

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
            <div className="menu" onMouseEnter={this.enter} onMouseLeave={this.leave}>
                <button>ГЛАВНАЯ СТРАНИЦА</button>
                {this.state.showMenu ? <nav>
                    <ul>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li><a href="">123</a></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li><a href="">123</a></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li><a href="">123</a></li>
                    </ul>
                </nav> : null}
            </div>
        );
    }
}

export default Menu;

