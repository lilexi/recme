import "./rand_comp.modules.css"
import React, {Component} from 'react';
import img from "../../assets/r_menu_rand_img.png"
import icon from "../../assets/create_post_ico.svg";
import {Link} from "react-router-dom";
import axios from "axios";

class RandomizerComp extends Component {
    state = {
        id: null,
        time: 5,
        cat: null,
        flag: true
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.searchPost();
    }

    changeHandler = (event, type) => {
        this.setState({[type]: event.target.value});
        this.setState({flag: false});
    };

    searchPost = () => {
        if (!this.state.flag) {
            axios.post('http://localhost:3001/randomPost', {
                time: this.state.time,
                cat: this.state.cat
            })
                .then(res => {
                    const posts = res.data.posts;
                    let post = posts.map(item => {
                        return item.id
                    });
                    let rand = post[Math.floor(Math.random()*post.length)];
                    this.setState({id: rand, flag: true});
                    // console.log('id', this.state.id);
                    // this.setState({posts});
                });
        }
    };

    mess = () => {
        return (
            <div className="r-btn" >
                <img className="icon" src={icon} alt="icon"/>
                <div className="btn-text-mess"> Заполни все поля!</div>
            </div>
        )
    };

    btn = () => {
        return (
            <Link to={`/post/${this.state.id}`}>
                <div className="r-btn" >
                    <img className="icon" src={icon} alt="icon"/>
                    <div className="btn-text-r">Удиви меня</div>
                </div>
            </Link>
        )
    };

    render() {
        return (
            <div className="randomizer-block">
                <img className="r-logo" src={img} alt=""/>
                <h3>у меня есть</h3>
                <div className="timer"><center>{this.state.time} <p>минут</p></center></div>
                <form>
                    <input className="r-range" type="range" value= {this.state.time} step="5" min="5" max="60" onChange={(event) => this.changeHandler(event, 'time')}/>
                    <br/>
                    <select className="r-kat" name="Категория" onChange={(event) => this.changeHandler(event, 'cat')}>
                        <option selected disabled>Категория</option>
                        <option value="space">Космос</option>
                        <option value="physics">Физика</option>
                        <option value="biology">Биология</option>
                    </select>
                    <br/>
                    {!this.state.id ? this.mess(): this.btn()}
                </form>

            </div>
        );
    }
}

export default RandomizerComp;