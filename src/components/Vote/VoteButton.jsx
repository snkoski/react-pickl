import React, { Component } from 'react';


class VoteButton extends Component {
    constructor(props) {
        super(props);
    }
voteHandler = (e) => {
    console.log("VOTED", this.props)
}
  render() {
    return <button className="VoteButton" onClick={() => this.props.handleVote([this.props.gameID, this.props.teamID])}>Vote</button>
  }
}
export default VoteButton;
