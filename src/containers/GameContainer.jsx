import React, { Component } from 'react';
import axios from 'axios';

import GameCard from '../components/Game/GameCard';
import { placeVote, getTeams, getTodaysGames, getUserVotesToday } from '../components/UserFunction';
import classes from './GameContainer.module.css';

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: null,
            teams: null,
            votes: []
        };
        axios.defaults.baseURL = 'http://localhost:5000/api/';
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    }

    componentDidMount() {
        getTeams()
            .then(teams => this.setState({ teams }))
        getTodaysGames()
            .then(games => this.setState({ games }))
        getUserVotesToday(this.props.currentUser.id)
                .then(votes => this.setState({ votes }))
    }

    // componentDidUpdate(prevProps) {
//         if (this.props.currentUser.id !== prevProps.currentUser.id) {
//             getUserVotesToday(this.props.currentUser.id)
//                 .then(votes => this.setState({ votes }))
//         }
    // }

    handleVote = (newVote) => {
        const vote = {
            user_id: this.props.currentUser.id,
            game_id: newVote[0],
            team_id: newVote[1]
        }
        placeVote(vote)
        .then(resp =>{ 
            console.log("HANDLE VOTE", resp)
            var filteredVotes = this.state.votes.filter(vote => vote.id !== resp.vote.id)
                this.setState({ votes: [...filteredVotes, resp.vote]})
        }, console.log("POST VOTE", this.state))
    }

    render() {
        if (this.state.games === null || this.state.teams === null) {
            return null
        }
        return (
            <div className={classes.GameContainer}>
                {this.state.games.map((game) => {

                    let awayTeam = this.state.teams.filter(team => team.id === game.away_team)

                    let homeTeam = this.state.teams.filter(team => team.id === game.home_team)

                    return <GameCard key={`game-${game.id}`} game={game} awayTeam={awayTeam[0]} homeTeam={homeTeam[0]} handleVote={this.handleVote} />
                })}
            </div>
        )
    }
}

export default GameContainer;
