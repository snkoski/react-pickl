import React, { Component } from 'react';
import '../../App.css'

import TeamCard from '../Team/TeamCard';
import VoteButton from '../Vote/VoteButton';



class GameCardSplit extends Component {
  render() {
    console.log("CARD SPLIT", this.props);

    return <div className="GameCard">
    <TeamCard team={this.props.awayTeam}/>
    <TeamCard team={this.props.homeTeam}/>
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

export default GameCardSplit;
