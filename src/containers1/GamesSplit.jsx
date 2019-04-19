import React, { Component } from 'react';
import '../App.css';

import GameCardSplit from '../components1/Game/GameCardSplit';

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
        if (this.state.games === null || this.state.teams === null) {
            console.log("NOPE")
            return null
        }
        return (
            <div className="GameContainer">
                {this.state.games.game.map((game) => {

                    let awayTeam = this.state.teams.team.filter(team => team.id === game.away_team)

                    let homeTeam = this.state.teams.team.filter(team => team.id === game.home_team)

                    return <GameCardSplit game={game} awayTeam={awayTeam[0]} homeTeam={homeTeam[0]} />
                })}
            </div>
        )
    }
}

export default GameContainer;
