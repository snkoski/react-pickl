import React, { Component } from 'react';
import { connect } from 'react-redux';

import GameCard from '../components/Game/GameCard';
import classes from './GameContainer.module.css';
import { fetchTeams } from '../actions/teams';
import { fetchGames } from '../actions/games';


class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchTeams()
        this.props.fetchGames()
    }

    render() {
        const { teams, games, votes } = this.props
        console.log("GAME CONT", votes)
        let loggedIn = !!this.props.currentUser.id
        if (games.data === false || teams.data === false) {
            return null
        }
        if (loggedIn)
        {return (
            <div className={classes.GameContainer}>
                {games.data.map((game) => {

                    let awayTeam = teams.data.filter(team => team.id === game.away_team)

                    let homeTeam = teams.data.filter(team => team.id === game.home_team)

                    let gameVote = votes.data.filter(vote => vote.game === game.id)

                    return <GameCard key={`game-${game.id}`} game={game} currentUser={this.props.currentUser} awayTeam={awayTeam[0]} homeTeam={homeTeam[0]} gameVote={gameVote[0]} handleVote={this.handleVote} />
                })}
            </div>
        )}
        return (
            <div className={classes.GameContainer}>
                {games.data.map((game) => {

                    let awayTeam = teams.data.filter(team => team.id === game.away_team)

                    let homeTeam = teams.data.filter(team => team.id === game.home_team)


                    return <GameCard key={`game-${game.id}`} game={game} currentUser={this.props.currentUser} awayTeam={awayTeam[0]} homeTeam={homeTeam[0]} handleVote={this.handleVote} />
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        teams: state.teams,
        votes: state.votes,
        games: state.games
    }
}

export default connect(mapStateToProps, { fetchTeams, fetchGames })(GameContainer);
