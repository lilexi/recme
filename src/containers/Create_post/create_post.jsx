import React, {Component} from 'react';
import "./create_post.modules.css"

import Header from '../../containers/header/Header';
import Create_post from "../../containers/Create_post/cr_post/cp_post"

class PostidPage extends Component {

    render() {
        return (
            <div className="create-post-page">
                <Header/>
                <Create_post/>
            </div>
        );
    }
}

export default PostidPage;