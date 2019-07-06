import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postVote } from '../../actions/vote';

import classes from './VoteButton.module.css';

class VoteButton extends Component {

  handleClick = (game, team) => {
    // console.log("VOTE BUTTON", this.props.votes)
    const vote = {
      user: this.props.user.userId,
      game: game,
      team: team
    }
    this.props.addVote(vote)
    this.props.voteButtonTeam(team)
  }

  render() {
    const { user, gameID, teamID, votedOn } = this.props
    const style = (!!user.userId && !votedOn) ? '' : classes.ButtonDisabled
    return( 
    <button className={style} onClick={() => this.handleClick(gameID, teamID)}>Vote</button>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth,
    votes: state.votes.votes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addVote: (vote) => dispatch(postVote(vote))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteButton);


