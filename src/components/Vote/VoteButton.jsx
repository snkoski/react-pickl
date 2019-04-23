import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './VoteButton.module.css';

class VoteButton extends Component {
  render() {
    const loggedIn = !!this.props.simpleReducer.user.id
    return( 
    <button className={loggedIn ? classes.ButtonEnabled : classes.ButtonDisabled} onClick={() => this.props.handleVote([this.props.gameID, this.props.teamID])}>Vote</button>
    )
  }
}

const mapStateToProps = state => ({
    ...state
})

export default connect(mapStateToProps)(VoteButton);


