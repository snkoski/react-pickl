import React, { Component } from 'react';

import classes from './VoteButton.module.css';

class VoteButton extends Component {
  render() {
    const loggedIn = !!this.props.currentUser.id
    console.log("VOTE BUTON", loggedIn)
    return <button className={loggedIn ? classes.ButtonEnabled : classes.ButtonDisabled} onClick={() => this.props.handleVote([this.props.gameID, this.props.teamID])}>Vote</button>
  }
}
export default VoteButton;
