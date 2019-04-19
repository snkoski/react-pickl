import React, { Component } from 'react';
import '../App.css';

import GameCard from '../components1/Game/GameCard';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        games: null,
        teams: null
    };
  }
  componentDidMount() {
    fetch('http://localhost:5000/api/games/today')
      .then(response => response.json())
      .then(games => this.setState({ games }));
    fetch('http://localhost:5000/api/teams')
      .then(response => response.json())
      .then(teams => this.setState({ teams }))
    console.log(this.state);
  }

  render() {
    return (
      <div className="GameContainer">
        {this.state.dailygameschedule.gameentry.map((game) => {
          return <GameCard game={game} />
        })}
      </div>
    )
  }
}

export default GameContainer;
