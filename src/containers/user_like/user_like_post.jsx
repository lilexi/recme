import React, {Component} from 'react';
import axios from 'axios/index';
import "../../containers/main_page/posts/posts.modules.css";

import video_logo from "../../assets/video_logo.png"
import article_logo from "../../assets/text_logo.png"
import link_logo from "../../assets/ling_logo.png"
import comment_logo from "../../assets/comment-logo.svg"
import PostID from "../../components/post/Post";

const Infinite = require('react-infinite');

class user_like_post extends Component {
    componentDidMount() {
        this.getPost();
    };
    state = {
        posts: [],
        user_id: this.props.user_id,
        elements: this.buildElements(0, 20),
        isInfiniteLoading: false
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
                key={post.id}
                postID={post.id}
                PostClick={this.PostClick}
                title={post.Title}
                LikeClick={this.LikeClick}
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

    buildElements(start,end) {
        let i = 0;
        let elements = [];
        setTimeout(() => {

            let p = this.state.posts.map(post => {
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

                if (i === start || i < end) {
                    elements.push(<PostID
                        key = {post.id}
                        postID={post.id}
                        PostClick={this.PostClick}
                        title={post.Title}
                        LikeClick={this.LikeClick}
                        countComment={post.comments}
                        count_like={post.like}
                        category_logo={cat}
                        content={post.text}
                        comment_logo={comment_logo}
                        category={post.id_catigories}
                        username={post.creator}
                    />);
                    i = i +1;
                }
                return null
            });
        }, 2000);

        // console.log('elem: ',elements);
        return elements
    }

    //inf list

    handleInfiniteLoad = function() {
        var that = this;
        this.setState({
            isInfiniteLoading: true
        });
        setTimeout(function() {
            var elemLength = that.state.elements.length,
                newElements = that.buildElements(elemLength, elemLength + 500);
            that.setState({
                isInfiniteLoading: false,
                elements: that.state.elements.concat(newElements)
            });
        }, 2500);
    };
    //
    elementInfiniteLoad = function() {
        return <div className="infinite-list-item">
            Loading...
        </div>;
    };

    render() {
        return (
            <div className="Posts">
                <Infinite
                    className={'inf'}
                    elementHeight={115}
                    containerHeight={900}
                    infiniteLoadingBeginBottomOffset={200}
                    onInfiniteLoad={this.handleInfiniteLoad}
                    loadingSpinnerDelegate={this.elementInfiniteLoad()}
                    isInfiniteLoading={this.state.isInfiniteLoading}>
                    {this.rPosts()}

                </Infinite>
            </div>
        )
    }
}


export default user_like_post;
