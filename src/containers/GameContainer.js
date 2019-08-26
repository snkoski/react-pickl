import React, { Component } from 'react';
import { connect } from 'react-redux';

import GameCard from '../components/Game/GameCard';
import { fetchTeams } from '../actions/teams';
import { fetchTodaysGames } from '../actions/games';
import { fetchVotes } from '../actions/vote';
import { fetchNumVotes } from '../actions/numVotes';

import classes from './GameContainer.module.css';

class GameContainer extends Component {
  componentDidMount() {
    this.props.getTeams();
    this.props.getTodaysGames();
    this.props.getNumVotes();
    if (localStorage.getItem('userId')) {
      this.props.getVotes(localStorage.getItem('userId'));
    }
  }

  render() {
    const {
      teams, games, votes, numVotes,
    } = this.props;
    if (games === null || teams === null) {
      return null;
    }
    return (
      <div className={classes.GameContainer}>
        {games.map((game) => {
          const awayTeam = teams.filter((team) => team.id === game.away_team);

          const homeTeam = teams.filter((team) => team.id === game.home_team);

          const awayVotes = numVotes.find((numVotes) => numVotes.team_id === game.away_team);

          const homeVotes = numVotes.find((numVotes) => numVotes.team_id === game.home_team);

          const vote = votes.find((vote) => game.id === vote.game);

          return (
            <GameCard
              key={`game-${game.id}`}
              game={game}
              currentUser={this.props.currentUser}
              awayTeam={awayTeam[0]}
              homeTeam={homeTeam[0]}
              awayVotes={awayVotes}
              homeVotes={homeVotes}
              vote={vote}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  teams: state.teams.teams,
  votes: state.votes.votes,
  games: state.games.allGames,
  authUser: state.auth.userId,
  numVotes: state.numVotes.numVotes,
});

const mapDispatchToProps = (dispatch) => ({
  getTeams: () => dispatch(fetchTeams()),
  getTodaysGames: () => dispatch(fetchTodaysGames()),
  getVotes: (id) => dispatch(fetchVotes(id)),
  getNumVotes: () => dispatch(fetchNumVotes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
