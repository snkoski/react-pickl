import React, { Component } from 'react';
import { connect } from 'react-redux';
import { placeVote } from '../../components/UserFunction';
import { setVote } from '../../actions/voteActions';

import classes from './VoteButton.module.css';

class VoteButton extends Component {
  
  handleVotez = (newVote) => {
    const vote = {
        user_id: this.props.authReducer.user.id,
        game_id: newVote[0],
        team_id: newVote[1]
    }
    placeVote(vote)
    .then(resp =>{ 
        var filteredVotes = this.props.voteReducer.vote.filter(vote => vote.id !== resp.vote.id)
            // this.setState({ votes: [...filteredVotes, resp.vote]})
            this.setVote([...filteredVotes, resp.vote])
    })
}

setVote = (votes) => {
  this.props.setVote(votes);
}

  render() {
    const { user, votes } = this.props
    const loggedIn = !!user.id
    const voteYes = loggedIn && !!votes.data.filter(vote => vote.team === this.props.teamID)[0]
    const style = !loggedIn ? classes.ButtonDisabled : voteYes ? classes.ButtonEnabledYes : classes.ButtonEnabledNo
    return( 
    <button className={style} onClick={() => this.handleVotez([this.props.gameID, this.props.teamID])}>Vote</button>
    )
  }
}

const mapStateToProps = state => {
  return {
    votes: state.votes,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  setVote: (votes) => dispatch(setVote(votes))
})

export default connect(mapStateToProps, mapDispatchToProps)(VoteButton);


