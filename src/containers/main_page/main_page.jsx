import React, {Component} from 'react';
import "./main_page.modules.css"

import Header from './header/Header';
import Posts from './posts/Posts';
import R_menu from './right_menu/Right_menu';

class MainPage extends Component {
    render() {
        return (
            <div className="main-page">
                <Header/>
                <Posts/>
                <R_menu/>
                </div>
        );
    }
}

export default MainPage;