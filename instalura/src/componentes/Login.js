import React, { Component } from 'react';
import createHistory from "history/createBrowserHistory";

const history = createHistory();

export default class Login extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {msg:this.props.location.search};
    }

    envia(event){
        event.preventDefault();
        const requestInfo = {
            method: 'POST',
            body:JSON.stringify({login:this.login.value,senha:this.senha.value}),
            headers: new Headers({
                'Content-type':'application/json'
            })
        };
        fetch('https://instalura-api.herokuapp.com/api/public/login', requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.text();
                }else {
                    throw new Error('Não foi possível fazer o Login');
                }
            })
            .then(token => {
                localStorage.setItem('auth-token',token);
                history.push('/timeline');
                this.forceUpdate();
            })
            .catch(error => {
                this.setState({msg:error.message});
            });
    }

    render(){
        return (
            <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <span>{this.state.msg}</span>
                <form onSubmit={this.envia.bind(this)}>
                    <input type="text" ref={(input) => this.login = input}></input>
                    <input type="password" ref={(input) => this.senha = input}></input>
                    <input type="submit" value="Login"></input>
                </form>
            </div>
        );
    }
}
