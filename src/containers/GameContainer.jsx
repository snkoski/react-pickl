import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { addVote } from '../actions/voteActions';

import GameCard from '../components/Game/GameCard';
import { placeVote, getTeams, getTodaysGames, getUserVotesToday } from '../components/UserFunction';
import classes from './GameContainer.module.css';
import { fetchTeams } from '../actions/teams';
import { fetchGames } from '../actions/games';


class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: null,
            // teams: null,
            // votes: []
        };
        axios.defaults.baseURL = 'http://localhost:5000/api/';
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    }

    componentDidMount() {
        this.props.fetchTeams()
        this.props.fetchGames()
        // getTodaysGames()
        //     .then(games => this.setState({ games }))
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.currentUser.id !== prevProps.currentUser.id) {
    //         getUserVotesToday(this.props.currentUser.id)
    //             .then(votes => this.setState({ votes }))
    //             .then(() => {
    //                 this.addVote(this.state.votes)
    //             })
    //     }
    // }

    // handleVote = (newVote) => {
    //     const vote = {
    //         user_id: this.props.currentUser.id,
    //         game_id: newVote[0],
    //         team_id: newVote[1]
    //     }
    //     placeVote(vote)
    //     .then(resp =>{ 
    //         var filteredVotes = this.state.votes.filter(vote => vote.id !== resp.vote.id)
    //             this.setState({ votes: [...filteredVotes, resp.vote]})
    //     })
    // }

    // addVote = (votes) => {
    //     this.props.addVote(votes);
    // }

    render() {
        const { teams, games } = this.props
        let loggedIn = !!this.props.currentUser.id
        console.log("GAME CONTAINER RENDER", this.props)
        // console.log(teams.data)
        if (games.data === false || teams.data === false) {
            return null
        }
        return (
            // <h1>
            //     hi
            // </h1>
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
