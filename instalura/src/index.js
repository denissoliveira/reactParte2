import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css';
import App from './App';
import Login from './componentes/Login';
import Logout from './componentes/Logout';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

/*function verificaAutenticacao(nextState,replace){
    if (localStorage.getItem('auth-token') === null) {
        //replace('/');
        return false;
    }
}*/

function verificaAutenticacao(nextState, replace) {
    if (localStorage.getItem('auth-token') === null) {
        return <Redirect to='/você precisa esta logado para acessar o endereço' />;
    } else {
        return <App/>;
    }
}

const Root = () => (
    <Router> 
        <div>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/timeline(/:login)" render={verificaAutenticacao} />
                <Route path="/logout" component={Logout} />
            </Switch>        
        </div>
    </Router>
);

ReactDOM.render(
    <Root/>, 
    document.getElementById('root')
    );
registerServiceWorker();
