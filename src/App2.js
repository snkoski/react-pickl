import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './NewComp/Navbar';
import Landing from './NewComp/Landing';
import Login from './NewComp/Login';
import Register from './NewComp/Register';
import Profile from './NewComp/Profile';

class App2 extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Route exact path='/' component={Landing} />
                    <div>
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/profile' component={Profile} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App2;