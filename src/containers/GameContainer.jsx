import React, { Component } from 'react';
import axios from 'axios';

import GameCard from '../components/Game/GameCard';
import { placeVote } from '../components/UserFunction';
import classes from './GameContainer.module.css';

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: null,
            teams: null,
            user: {
                id: 1
            },
            votes: []
        };
        axios.defaults.baseURL = 'http://localhost:5000/api/';
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

        // const getTeams = () => {
        //     return axios
        //     .get('http://localhost:5000/api/teams')
        //     .then(resp => this.setState({ teams: resp.data.teams }))
        // }
    }

    

    componentDidMount() {
        axios.get('games/today')
            .then(resp => this.setState({ games: resp.data.game }))
        axios.get('teams')
            .then(resp => this.setState({ teams: resp.data.team }))
        axios.get('votes/1/today')
            .then(resp => this.setState({ votes: resp.data.votes }))
    }

    handleVote = (newVote) => {
        const vote = {
            user_id: this.state.user.id,
            game_id: newVote[0],
            team_id: newVote[1]
        }
        placeVote(vote)
        .then(resp =>{ 
            var filteredVotes = this.state.votes.filter(vote => vote.id !== resp.vote.id)
            if (this.state.user.id === 1) {
                this.setState({ votes: [...filteredVotes, resp.vote]})
            }
        }, console.log("POST VOTE", this.state))
    }

    render() {
        console.log('IN RENDER', this.state);

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
