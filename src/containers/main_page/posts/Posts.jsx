import React, {Component} from 'react';
import axios from 'axios/index';
import "./posts.modules.css";
import Post from "../../../components/post/Post"

import video_logo from "../../../assets/video_logo.png"
import article_logo from "../../../assets/text_logo.png"
import link_logo from "../../../assets/ling_logo.png"
import comment_logo from "../../../assets/comment-logo.svg"

class Posts extends Component {

    componentDidMount() {
        this.getPost();
    };

    state = {
        posts: []
    };

    getPost = () => {
        axios.get('http://localhost:3001/posts', {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
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

            return <Post
                postID={post.id}
                PostClick={this.PostClick}
                title={post.Title}
                LikeClick={this.LikeClick}
                countComment={post.comments}
                count_like={post.like}
                category_logo={cat}
                content={post.text.slice(0.3)}
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

export default Posts;
