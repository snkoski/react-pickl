import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postVote } from '../../actions/vote';
import { editNumVote, addNumVote } from '../../actions/numVotes';

import classes from './VoteButton.module.css';

class VoteButton extends Component {

  handleClick = (gameID, team) => {
    const votedAlready = this.props.votes.find(vote => vote.game === gameID)
    const vote = {
      user: this.props.user.userId,
      game: gameID,
      team: team
    }

    this.props.addVote(vote)
    
    if (votedAlready) {
      this.props.editNum(vote)
    } else {
      this.props.addNum(vote)
    }
    
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
    votes: state.votes.votes,
    games: state.games.allGames
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addVote: (vote) => dispatch(postVote(vote)),
    editNum: (vote) => dispatch(editNumVote(vote)),
    addNum: (vote) => dispatch(addNumVote(vote))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteButton);


