import React, {Component} from 'react';
import "./postid_page.modules.css"

import Header from '../../containers/header/Header';
import Post from "./Post/Post_page"
import Comments from "./comments/comments"
class PostidPage extends Component {

    state = {
      post_id: parseInt(window.location.pathname.split("/").pop())
    };

    render() {
        return (
            console.log(this.state.post_id),
            <div className="postid-page">
                <Header/>
                <Post post_id={this.state.post_id}/>
                <Comments/>
            </div>
        );
    }
}

export default PostidPage;