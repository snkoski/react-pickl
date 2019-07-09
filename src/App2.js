import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import GameContainer from './containers/GameContainer';
import GamePage from './components/Game/GamePage';
import { authCheckState } from './actions/auth';
import AntNav from './components/Nav/AntNav';
import AuthLogin from './components/Auth/AuthLogin';
import AuthRegister from './components/Auth/AuthRegister';
import Logout from './components/Auth/Logout/Logout';

class App2 extends Component {

    componentDidMount() {
        this.props.onTryAutoSignup()
    }

    render() {
        return (
            <div className="App">
                <AntNav auth={this.props.isAuthenticated}/>
                <div>
                    <Switch>
                        <Route path='/login' component={AuthLogin} />
                        <Route path='/register' component={AuthRegister} />
                        <Route path='/games/:id' render={(routeProps) => (<GamePage {...routeProps} />)} />
                        <Route path='/logout' component={Logout} />
                        <Route path='/' component={GameContainer} />
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(authCheckState())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App2);