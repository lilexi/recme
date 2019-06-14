import React, {Component} from 'react';
import "./cr_post.modules.css"
import axios from "axios";
import avatar from "../../../assets/avatar.svg";
import {Redirect} from "react-router";

class CpPost extends Component {

    state = {
        user_id: 1,
        user_name: null,
        title: null,
        text: null,
        cat_info: null,
        id_cat: null,
        // date: new Date(),
        time_to_read: null,
        hard_rating: null,
        submit: false
    };

    componentDidMount() {
        this.getUser()
    }

    changeHandler = (event, type) => {
        this.setState({[type]: event.target.value});
    };

    submit = (event) => {
        event.preventDefault();
        const PostData = [];
        PostData.push(this.state.title);
        PostData.push(this.state.text);
        PostData.push(this.state.cat_info);
        PostData.push(this.state.id_cat);
        // PostData.push(this.state.date);
        PostData.push(this.state.time_to_read);
        PostData.push(this.state.hard_rating);
        PostData.push(this.state.user_name);
        this.cPost(PostData);
        this.goto()
    };

    cPost = (PostData) => {
        axios.post('http://localhost:3001/createPost', {
            post: PostData
        })
            .then(res => {
            })
    };

    getUser = () => {
        axios.post('http://localhost:3001/getUser', {
            user_id: this.state.user_id
        })
            .then(res => {
                const user = res.data.user;
                user.map(item => {
                        this.setState({user_name: item.name})
                    }
                );
            })
    };

    goto = () => {
        this.setState({submit: true});
        alert('Статья создана!')
    };

    render() {
        return (
            <div className="form" onSubmit={this.submit}>
                <h3>Создать статью</h3>
                <form className="in-form">
                    <input className="input" type="text" placeholder="Название" value={this.state.title}
                           onChange={(event) => this.changeHandler(event, 'title')}/>
                    <br/>

                    <textarea className="text" name="text" placeholder="Текст статьи" value={this.state.text}
                              onChange={(event) => this.changeHandler(event, 'text')} rows="20"
                              cols="80">{this.state.text}</textarea><br/>

                    <select className="s-type" name="Тип" onChange={(event) => this.changeHandler(event, 'cat_info')}>
                        <option selected disabled>Тип</option>
                        <option value="article">Статья</option>
                        <option value="video">Видео</option>
                        <option value="link">Ссылка</option>
                    </select>

                    <select className="s-kat" name="Категория"
                            onChange={(event) => this.changeHandler(event, 'id_cat')}>
                        <option selected disabled>Категория</option>
                        <option value="space">Космос</option>
                        <option value="physics">Физика</option>
                        <option value="biology">Биология</option>
                    </select>

                    <select className="s-hard" name="Сложность"
                            onChange={(event) => this.changeHandler(event, 'hard_rating')}>
                        <option selected disabled>Сложность</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <select className="s-time" name="Время прочтения"
                            onChange={(event) => this.changeHandler(event, 'time_to_read')}>
                        <option selected disabled>Время просмотра</option>
                        <option value="5">5 мин</option>
                        <option value="10">10 мин</option>
                        <option value="15">15 мин</option>
                        <option value="20">20 мин</option>
                        <option value="30"> >30 мин</option>
                    </select>
                    <br/>
                    <input className="s-btn" type="submit"/>
                    {this.state.submit ? <Redirect to={'/'}/> : null}
                </form>
            </div>
        );
    }
}

export default CpPost;