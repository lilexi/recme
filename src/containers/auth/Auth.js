import React, {Component} from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router";
import * as actions from './../../store/actions/index';


class Auth extends Component {
    state = {
        type: null,
        name: "",
        email: "",
        password: "",
    };

    componentDidMount() {
        this.setState({type: this.props.match.params.type});
    }

    changeHandler = (event, type) => {
        this.setState({[type]: event.target.value});
    };

    submit = (event) => {
        event.preventDefault();
        const userData = [];
        userData.push(this.state.name);
        userData.push(this.state.email);
        userData.push(this.state.password);
        this.props.signUP(userData);
    };

    render() {
        let form = <form onSubmit={this.submit}>
            <input type="text" placeholder="name" value={this.state.name}
                   onChange={(event) => this.changeHandler(event, 'name')}/>
            <input type="email" placeholder="email" value={this.state.email}
                   onChange={(event) => this.changeHandler(event, 'email')}/>
            <input type="password" placeholder="password" value={this.state.password}
                   onChange={(event) => this.changeHandler(event, 'password')}/>
            <input type="submit"/>
        </form>;
        if (this.state.type === 'auth')
            form = <form onSubmit={this.submit}>
                <input type="email" placeholder="email" value={this.state.email}
                       onChange={(event) => this.changeHandler(event, 'email')}/>
                <input type="password" placeholder="password" value={this.state.password}
                       onChange={(event) => this.changeHandler(event, 'password')}/>
                <input type="submit"/>
            </form>;
        return (
            <div>
                {form}
                {this.props.errorMessage}
                {this.props.user ? <Redirect to={"/"}/> : null}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        user: state.authReducer.user ? state.authReducer.user : null,
        errorMessage: state.authReducer.error ? state.authReducer.error.message : "",
    }
};
const mapDispatchToProps = dispatch => {
    return {
        signUP: (userData) => dispatch(actions.signup(userData)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);