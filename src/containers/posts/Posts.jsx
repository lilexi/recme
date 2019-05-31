import React, {Component} from 'react';
import "./posts.modules.css";
import Post from "../../components/post/Post"

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
    render() {
        return (
            <div className="Posts">
            <Post/>
            <Post/>
            </div>
        )
    }
}


export default Posts;
