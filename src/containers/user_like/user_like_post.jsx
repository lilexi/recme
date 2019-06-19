import React, {Component} from 'react';
import axios from 'axios/index';
import "../../containers/main_page/posts/posts.modules.css";

import video_logo from "../../assets/video_logo.png"
import article_logo from "../../assets/text_logo.png"
import link_logo from "../../assets/ling_logo.png"
import comment_logo from "../../assets/comment-logo.svg"
import PostID from "../../components/post/Post";

class user_like_post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            user_id: this.props.user_id,
        };
    }

    componentDidMount() {
        this.getPost();
    };


    getPost = () => {
        axios.post('http://localhost:3001/user_like', {
            uID: this.state.user_id
        })
            .then(res => {
                const posts = res.data.posts;
                this.setState({posts});
            })
    };

    rPosts() {
        let p = null;
        p = this.state.posts.map(post => {
            let cat = null;
            if (post.cat_info === 'video') {
                cat = video_logo;
            }
            if (post.cat_info === 'article') {
                cat = article_logo;
            }
            if (post.cat_info === 'link') {
                cat = link_logo;
            }

            return <PostID
                postID={post.id}
                title={post.Title}
                countComment={post.comments}
                count_like={post.like}
                category_logo={cat}
                content={post.text}
                comment_logo={comment_logo}
                category={post.id_catigories}
                username={post.creator}
            />
        });
        return p
    }

    render() {
        return (
            <div className="Posts">
                {this.rPosts()}
            </div>
        )
    }
}

export default user_like_post;
