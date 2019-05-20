import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postVote } from '../../actions/vote';

import classes from './VoteButton.module.css';

class VoteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick = (user, game, team) => {
    this.props.postVote({user:user, game:game, team:team})
    this.props.voteButtonTeam(team)
  }

  render() {
    const { user, gameID, teamID } = this.props
    const style = !!user.id ? '' : classes.ButtonDisabled
    return( 
    <button className={style} onClick={() => this.handleClick(user.id, gameID, teamID)}>Vote</button>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { postVote })(VoteButton);


