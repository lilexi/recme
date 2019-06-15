import React, {Component} from 'react';
import "./commensts.modeles.css"
class Comments extends Component {
    render() {
        return (
            <div className="comments">
                <div className="comment">
                    <div className="create-comment">
                        <div className="c-user-info"></div>
                        <div className="line"/>
                        <div className="c-input-div" > <input className="c-input" type="text"/> </div>

                    </div>
                    <div className="com-text"> КОММЕНТАРИИ </div>
                    <hr/>

                </div>
            </div>
        );
    }
}

export default Comments;