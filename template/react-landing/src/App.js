import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import logo from './logo.svg';

// import './App.css';
// import './assets/css/font-awesome.min.css';
// import './assets/css/main.css';

import Landing from './pages/landing';
import Login from './pages/login/login';
import DashBoard from './pages/secured/dashboard';
import AddVideo from './pages/addVideo';

function App() {
    return (
        <div>
            <Router basename={'/homepage'}>
                <Switch>
                    <Route exact path="/" render={() => <Redirect to='landing' />}></Route>
                    <Route exact path="/landing" component={Landing}></Route>
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/dashboard" component={DashBoard}></Route>
                    <Route path="/addvideo" component={AddVideo}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;