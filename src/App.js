import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './components/Nav/Navbar';
import GameContainer from './containers/GameContainer';
import Login from './components/Auth/Login';
import Home from './containers/Home'
import Axios from 'axios';

import { addUserAction, removeUserAction } from './actions/userActions';

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
                .then(() => {
                    this.addUserAction(this.state.auth.currentUser)
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
            this.removeUserAction()
        })

    }

    handleLogin = (user) => {
        this.setState({
            auth: {
                currentUser: user
            }
        })
    }

    addUserAction = (user) => {
        this.props.poopAction(user);
    }

    removeUserAction = () => {
        this.props.removeUserAction();
    }



    render() {
        const props = this.state.auth
        return (
            <div className="App">
                <Navbar onLogout={this.handleLogout} onLogin={this.handleLogin} />
                <div>
                    {
                            JSON.stringify(this.props)
                        }
                    <Switch>
                        <Route path='/login' render={(routeProps) => (<Login {...routeProps} onLogin={this.handleLogin} />)} />
                        <Route path='/' render={(routeProps) => (<GameContainer {...routeProps} {...props} />)} />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    poopAction: (user) => dispatch(addUserAction(user)),
    removeUserAction: () => dispatch(removeUserAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);