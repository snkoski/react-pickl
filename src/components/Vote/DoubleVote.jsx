import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postVote } from '../../actions/vote';


class DoubleVote extends Component {
    constructor(props) {
        super(props);
        this.state = {
          buttonColor: true
        };
      }

      handleClick = (user, game, team) => {
        console.log("HANDLE CLICK", user, game, team)
        this.props.postVote({user:user, game:game, team:team})
        this.props.voteButtonTeam(team)        
      }

      render () {
        return(
            <div>
                <button onClick={()=>this.handleClick(this.props.user.id, this.props.game, this.props.home.id)}>Vote</button>
                <button onClick={()=>this.handleClick(this.props.user.id, this.props.game, this.props.away.id)}>Vote</button>
            </div>
        )
          }
}

const mapStateToProps = state => {
  return {
    // votes: state.votes,
    user: state.user
  }
}

export default connect(mapStateToProps, { postVote })(DoubleVote);