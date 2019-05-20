import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postVote } from '../../actions/vote';

import classes from './VoteButton.module.css';

class VoteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // buttonColor: true
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     buttonColor: this.props.gameColor
  //   })
  // }

  // colorToggle = () => {
  //   this.
  // }


  handleClick = (user, game, team) => {
    this.props.postVote({user:user, game:game, team:team})
    this.props.buttonToggle()
    console.log("HANDLE CLICK", this.props)
  }

  render() {
    console.log("Vote Button", this.props)

    const { user, votes, gameID, teamID, postVote } = this.props
    const loggedIn = !!user.id
    // const voteYes = loggedIn && votes.data && !!votes.data.filter(vote => vote.team === this.props.teamID)[0]
    // const voteYes = this.props.gameColor
    // const style = !loggedIn ? classes.ButtonDisabled : voteYes ? classes.ButtonEnabledYes : classes.ButtonEnabledNo
    const style = ''
    return( 
    <button className={style} onClick={() => this.handleClick(user.id, gameID, teamID)}>Vote</button>
    )
  }
}

const mapStateToProps = state => {
  return {
    // votes: state.votes,
    user: state.user
  }
}

export default connect(mapStateToProps, { postVote })(VoteButton);


