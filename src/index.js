import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect,Switch } from 'react-router-dom'
import './index.css';
import {Login} from './Login';
import {Register} from "./Register";


const App = () => {
    return (
        <Router>
            <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path="/">
                <Redirect to="/login" />
            </Route>
            <Route component={Login} />
            </Switch>
        </Router>
    )
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

