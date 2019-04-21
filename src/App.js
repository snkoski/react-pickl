import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Nav/Navbar';
import GameContainer from './containers/GameContainer';
import Login from './components/Auth/Login';
import Home from './containers/Home'
import Axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            auth: {
                currentUser: {}
            }
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        if (token) {
            Axios.get('http://localhost:5000/api/reauth', {
                headers: { 'Authorization': 'Bearer ' + token }
            })
                .then(resp => {
                    this.setState({
                        auth: {
                            currentUser: resp.data.user
                        }
                    })
                })
        }
    }

    handleLogout = () => {
        this.setState({
            auth: {
                currentUser: {}
            }
        }, () => {
            localStorage.clear()
        })
    }

    handleLogin = (user) => {
        console.log("IN HANDLE LOGIN USER", user)
        this.setState({
            auth: {
                currentUser: user
            }
        })
    }

    render() {
        console.log("APP RENDER", this.state)
        const props = this.state.auth
        const loginProps = {'login': this.handleLogin}
        return (
            <div className="App">
                <Navbar onLogout={this.handleLogout} onLogin={this.handleLogin} />
                <div>
                    <Switch>
                        <Route path='/login' render={(routeProps) => (<Login {...routeProps} onLogin={this.handleLogin} />)} />
                        <Route path='/' render={(routeProps) => (<GameContainer {...routeProps} {...props} />)} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;