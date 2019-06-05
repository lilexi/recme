import React from 'react';
import './post.modules.css';
import cat_logo from "../../assets/video_logo.png";
import likeOFF from "../../assets/likeOFF.svg";
import comment_logo from "../../assets/comment-logo.svg";

// class likes extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             like: false,
//             countLike: 100,
//         };
//
//         this.like = () => {
//             this.setState({like: true} );
//             this.setState({countLike: this.state.countLike + 1} );
//         };
//     };
//
//     render()
//     {
//         return (
//             <div className="like" onClick={this.like}>
//                 <img src={likeOFF} alt="like"/>
//                 <div> {this.props.countLike} </div>
//             </div>
//         )
//     }
// }

function Post(props) {
    return (
        <div className="Post">
            <div className="like" onClick={props.likeOn.bind(this)}>
                <img src={likeOFF} alt="like"/>
                <div className="count-like" onChange={props.likeOn.bind(this)}> {props.count_like} </div>
            </div>

            <div className="line"/>
            <div className="category-logo">
                <img src={props.category_logo} alt="c_logo"/>
            </div>
            <div className="title"> {props.title} </div>
            <div className="content"><p>{props.content}</p></div>
            <div className="comment-logo">
                <img src={props.comment_logo} alt=""/>
            </div>
            <div className="count-comment"> <p>{props.countComment}</p></div>
            <div className="category"><p>Категория: {props.category}</p></div>
            <div className="creator"> <p>Создал: @{props.username}</p> </div>
            <div className="menu"/>
        </div>
    )
}



export default Post;