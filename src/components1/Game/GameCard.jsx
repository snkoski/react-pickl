import React, { Component } from 'react';
import '../../App.css'

import TeamCard from '../Team/TeamCard';
import VoteButton from '../Vote/VoteButton';



class GameCard extends Component {

  render() {
    return <div className="GameCard">
      <TeamCard team={this.props.game.awayTeam}/>
      <TeamCard team={this.props.game.homeTeam}/>
      <div className="btn-container">
        <div className="btn-left"><VoteButton /></div>
        <div className="btn-right"><VoteButton /></div>
      </div>
      <div className="GameInfo">

        <p>{this.props.game.time}</p>
        <p>{this.props.game.location}</p>


      </div>
    </div>
  }
}

export default GameCard;
