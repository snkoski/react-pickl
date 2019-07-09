import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { logout } from '../../../actions/auth';
import { removeVotes } from '../../../actions/vote';

class Logout extends Component {
    componentDidMount() {
        this.props.removeVotes();
        this.props.onLogout();
    }
    render () {
        return <Redirect to='/' />
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout()),
        removeVotes: () => dispatch(removeVotes())
    };
};

export default connect(null, mapDispatchToProps)(Logout);
