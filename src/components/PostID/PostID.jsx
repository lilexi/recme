import React, {Component} from 'react';
import axios from 'axios/index';
import { Link } from 'react-router-dom'

import './postID.modules.css';

import likeOFF from "../../assets/likeOFF.svg";
import likeON from "../../assets/likeON.png"


class Like extends Component {
    componentDidMount() {
        this.getLike();
    }

    constructor(props) {
        super(props);
        this.state = {
            u_id: 1,
            idp: 0,
            isLike: false,
            count_like: 0,
            like_log: null
        };
    }

    getLike = () => {
        this.setState({
            idp: this.props.idp,
            count_like: parseInt(this.props.count_like)
        });

        axios.post('http://localhost:3001/getUserlike', {
            u_id: this.state.u_id,
        })
            .then(res => {
                const allLikefromUser = res.data.like;
                // console.log(allLikefromUser);
                allLikefromUser.map(id => {
                    if (this.state.idp === id.id) {
                        this.setState({isLike: true});
                        this.setState({like_logo: likeON})
                    }
                });
            });
        if (this.state.isLike) {
            this.setState({like_logo: likeON});
        }
        else {
            this.setState({like_logo: likeOFF});
        }
    };
    likeHandle = () => {
        if (this.state.isLike === true) {
            this.setState({isLike: false});
            this.setState({count_like: parseInt(this.state.count_like) -1 });
            this.setState({like_logo: likeOFF});
            // console.log('postID', this.state.idp, '[like -1]');

            axios.post('http://localhost:3001/likeUPDATE',{
                u_id: 1,
                post_id: this.props.idp,
                like: this.state.count_like -1
            })
                .then(res => {
                     // console.log(res.data)
                })
                .catch(function (error) {
                    console.log(error);
                });

            axios.post('http://localhost:3001/likeDELETE',{
                u_id: 1,
                post_id: this.props.idp,
            })
                .then(res => {
                    // console.log(res.data)
                })
                .catch(function (error) {
                    console.log(error);
                });

        }
        else {
            this.setState({isLike: true});
            this.setState({count_like: parseInt(this.state.count_like) +1 });
            this.setState({like_logo: likeON});
            // console.log('postID', this.state.idp, '[like +1]');

            axios.post('http://localhost:3001/likeINSERT',{
                u_id: 1,
                post_id: this.props.idp,
            })
                .then(res => {
                    // console.log(res.data)
                })
                .catch(function (error) {
                    console.log(error);
                });

            axios.post('http://localhost:3001/likeUPDATE',{
                u_id: 1,
                post_id: this.props.idp,
                like: this.state.count_like +1
            })
                .then(res => {
                    // console.log(res.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };

    render() {
        return (
            <div className="like-id" onClick={this.likeHandle}>
                <img src={this.state.like_logo} alt="like"/>
                <div className="count-like" onChange={this.LikeClick}> {this.state.count_like} </div>
            </div>
        );
    }
}

function PostID(props) {
    return (
        <div className="Post" >
            <Like
                count_like = {props.count_like}
                idp = {props.postID}
            />
            <div className="line"/>
            <div className="category-logo">
                <img src={props.category_logo} alt="c_logo"/>
            </div>
                <div className="title"> <Link to={`/post/${props.postID}`}> {props.title}  </Link> </div>
            <div className="content-postID"><p>{props.content}</p></div>
            <div className="comment-logo">
                <img src={props.comment_logo} alt=""/>
            </div>
            <div className="count-comment"><p>{props.countComment}</p></div>
            <div className="category"><p>Категория: {props.category}</p></div>
            <div className="creator"><p>Создал: @{props.username}</p></div>
            <div className="menu-post"/>
        </div>

    )
}

export default PostID;