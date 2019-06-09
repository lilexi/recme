import React, {Component} from 'react';
import "./postid_page.modules.css"

import Header from './header/Header';

class PostidPage extends Component {
    state = {
      post_id: window.location.pathname.split("/").pop()
    };

    render() {
        return (
            console.log(this.state.post_id),
            <div className="postid-page">
                <Header/>
            </div>
        );
    }
}

export default PostidPage;