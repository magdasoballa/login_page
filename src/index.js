import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect,Switch } from 'react-router-dom'
import './index.scss';
import {Login} from './Login';
import {Register} from "./Register";
import {UserSite} from "./UserSite";
import UserProvider from "./UserProvider";



const App = () => {
    return (
        <Router>
            <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/usersite' component={UserSite}/>
            <Route exact path="/">
                <Redirect to="/login" />
            </Route>
            <Route component={Login} />
            </Switch>
        </Router>
    )
}
ReactDOM.render(
    <UserProvider>
    <App/>
    </UserProvider>,
    document.getElementById('root')
);

