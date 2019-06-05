import React, {Component} from 'react';
import axios from 'axios';
import "./posts.modules.css";
import Post from "../../components/post/Post"

import likeOFF from "../../assets/likeOFF.svg"
import video_logo from "../../assets/video_logo.png"
import article_logo from "../../assets/text_logo.png"
import link_logo from "../../assets/ling_logo.png"
import comment_logo from "../../assets/comment-logo.svg"


/*function Posts(props) {

    let posts = props.posts.map(post => {
        return <Post likes={post.likes} category={post.cat} content={post.text}/>
    });

    return (
        <div className="Posts">
            <div className="P1"/>
            <div className="P1"/>
            {posts}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        posts: state.postReducer.posts ? state.postReducer.posts : [],
    }
};


export default Posts;*/

class Posts extends Component {

    componentDidMount() {
        this.getPost();
    };

    state = {
        posts: [],
        id: [1, 2, 3]
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

    actionLike() {
        // let count_like = this.state.count_like;
        // this.setState({count_like: count_like + 1})
        // console.log(this.state.count_like);
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

            let time = null;


            return <Post
                title={post.Title}
                likeOn={this.actionLike}
                countComment={post.comments}
                count_like={post.like}
                category_logo = {cat}
                content={post.text.slice(0.3)}
                comment_logo={comment_logo}
                category = {post.id_catigories}
                username={post.creator}
            />
        });
        return p
    }

    render() {
        console.log(this.state.posts);
        return (
            <div className="Posts">
                {this.rPosts()}
                {/*<Post*/}
                {/*    like_logo={likeOFF}*/}
                {/*    count_like={this.state.count_like}*/}
                {/*    category_logo={cat_logo}*/}
                {/*    category=""*/}
                {/*    username={this.state.user}*/}
                {/*    time="10"*/}
                {/*    title={this.state.title}*/}
                {/*    content={this.state.content}*/}
                {/*    countComment="100k"*/}
                {/*    comment_logo={comment_logo}*/}
                {/*    likeOn={this.actionLike}*/}
                {/*/>*/}
            </div>
        )
    }
}

export default Posts;
