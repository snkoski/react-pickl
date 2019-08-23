import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { logout } from '../../../actions/auth';
import { removeVotes } from '../../../actions/vote';

class Logout extends Component {
  componentDidMount() {
    const { removeVotes, onLogout } = this.props;
    removeVotes();
    onLogout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logout()),
  removeVotes: () => dispatch(removeVotes()),
});

export default connect(null, mapDispatchToProps)(Logout);
