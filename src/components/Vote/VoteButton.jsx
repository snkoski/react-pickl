import React, { Component } from 'react';


class VoteButton extends Component {

  render() {
    return <button className="VoteButton" onClick={() => this.props.handleVote([this.props.gameID, this.props.teamID])}>Vote</button>
  }
}
export default VoteButton;
