import React, { Component } from 'react';
import createHistory from "history/createBrowserHistory";

const history = createHistory();

export default class Logout extends Component {

    componentWillMount(){
        localStorage.removeItem('auth-token');
        history.push('/');
    }

    render(){
        return null;
    }
}    