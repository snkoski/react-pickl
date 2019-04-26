import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placeVote } from '../../components/UserFunction';
import { setVote } from '../../actions/voteActions';
import { postVote } from '../../actions/vote';

import classes from './VoteButton.module.css';

class VoteButton extends Component {

  // componentDidUpdate(prevProps) {
  //   // Typical usage (don't forget to compare props):
  //   let currentVote = this.props.votes.data.filter(vote => vote.team === this.props.tamID)
  //   let prevVote = prevProps.votes.data.filter(vote => vote.team === this.props.tamID)
  //   if (currentVote !== prevVote) {
  //     this.fetchData(this.props.userID);
  //   }
  // }

  // shouldComponentUpdate(nextProps) {
  //   let currentVote = this.props.votes.data.filter(vote => vote.team === this.props.tamID)
  //   let nextVote = nextProps.votes.data.filter(vote => vote.team === this.props.tamID)
  //   return currentVote !== nextVote
  // }

  render() {
    console.log("VOTE BUTTON PROPS", this.props, "STATE", this.state)
    const { user, votes, gameID, teamID, postVote } = this.props
    const loggedIn = !!user.id
    const voteYes = loggedIn && votes.data && !!votes.data.filter(vote => vote.team === this.props.teamID)[0]
    const style = !loggedIn ? classes.ButtonDisabled : voteYes ? classes.ButtonEnabledYes : classes.ButtonEnabledNo
    
    return( 
    <button className={style} onClick={() => postVote({user:user.id, game:gameID, team:teamID})}>Vote</button>
    )
  }
}

const mapStateToProps = state => {
  return {
    votes: state.votes,
    user: state.user
  }
}

export default connect(mapStateToProps, { postVote })(VoteButton);


