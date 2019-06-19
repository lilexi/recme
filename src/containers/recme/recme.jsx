import React, {Component} from 'react';
import "../main_page/main_page.modules.css"

import Header from '../../containers/header/Header';
import Posts from './recme_post';
import R_menu from '../main_page/right_menu/Right_menu';

class Recme extends Component {

    state = {
        user_id: 1

    };

    render() {
        return (
            <div className="main-page">
                <Header />
                <Posts user_id={this.state.user_id}/>
                <R_menu/>
            </div>
        );
    }
}

export default Recme;