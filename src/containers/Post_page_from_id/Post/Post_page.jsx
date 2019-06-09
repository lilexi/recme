import React, {Component} from 'react';
import axios from 'axios/index';
import "./post_page.modules.css";

import video_logo from "../../../assets/video_logo.svg"
import article_logo from "../../../assets/text_logo.png"
import link_logo from "../../../assets/ling_logo.png"
import comment_logo from "../../../assets/comment-logo.svg"
import PostID from "../../../components/PostID/PostID";

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            id: this.props.post_id
        };
    }

    componentDidMount() {
        this.getPost();
    };

    getPost = () => {
        axios.post('http://localhost:3001/postsID', {
            id: this.state.id
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
