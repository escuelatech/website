import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import logo from './logo.svg';
import './App.css';
import './assets/css/font-awesome.min.css';
import './assets/css/main.css';
import Landing from './pages/landing';
import { Helmet } from "react-helmet";

function App() {
    return (
        <div>
            <Helmet>
                {/* <script src="./assets/js/jquery.min.js" type="text/javascript" />
                <script src="./assets/js/jquery.scrolly.min.js" type="text/javascript" />
                <script src="./assets/js/jquery.poptrox.min.js" type="text/javascript" /> */}
            </Helmet>
            <Router>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to='landing' />}></Route>
                    <Route exact path="/landing" component={Landing}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;