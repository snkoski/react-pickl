import React, { Component } from 'react';
import { connect } from 'react-redux';

import GameCard from '../components/Game/GameCard';
import { fetchTeams } from '../actions/teams';
import { fetchTodaysGames } from '../actions/games';
import { fetchVotes } from '../actions/vote';

import classes from './GameContainer.module.css';
import { Button } from 'antd'

class GameContainer extends Component {
    
    componentDidMount() {
        console.log("DID MOUNT")
        this.props.getTeams();
        this.props.getTodaysGames();
        if (localStorage.getItem('userId')) {
            this.props.getVotes(localStorage.getItem('userId'))
        }
    }

    // componentDidUpdate(prevProps) {
    //     // console.log("DID UPDATE NEW: ", this.props.authUser, "PREVPROPS: ", prevProps.authUser)
    //     if (this.props.authUser !== prevProps.authUser) {
    //         // console.log("FETCH VOTES DID UPDATE")
    //         this.props.getVotes(this.props.authUser)
    //     }
    // }

    render() {
        const { teams, games, votes } = this.props
        let loggedIn = !!this.props.authUser
        if (games === null || teams === null) {
            return null
        }
        // if (loggedIn && votes)
        // {return (
        //     <div className={classes.GameContainer}>
        //         {games.map((game) => {

        //             let awayTeam = teams.filter(team => team.id === game.away_team)

        //             let homeTeam = teams.filter(team => team.id === game.home_team)

        //             let gameVote = votes.filter(vote => vote.game === game.id)

        //             return <GameCard key={`game-${game.id}`} game={game} currentUser={this.props.currentUser} awayTeam={awayTeam[0]} homeTeam={homeTeam[0]} gameVote={gameVote[0]} handleVote={this.handleVote} />
        //         })}
        //         <Button type="primary">Button</Button>
        //     </div>
        // )}
        return (
            <div className={classes.GameContainer}>
                {games.map((game) => {

                    let awayTeam = teams.filter(team => team.id === game.away_team)

                    let homeTeam = teams.filter(team => team.id === game.home_team)

                    
                    // let vote = votes.filter(vote => game.id === vote.game )
                    let vote = votes.find(vote => game.id === vote.game)
                    


                    return <GameCard key={`game-${game.id}`} 
                        game={game} 
                        currentUser={this.props.currentUser} 
                        awayTeam={awayTeam[0]} 
                        homeTeam={homeTeam[0]} 
                        vote={vote}
                        // handleVote={this.handleVote} 
                    />
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        teams: state.teams.teams,
        votes: state.votes.votes,
        games: state.games.allGames,
        authUser: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTeams: () => dispatch(fetchTeams()),
        getTodaysGames: () => dispatch(fetchTodaysGames()),
        getVotes: (id) => dispatch(fetchVotes(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);


// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import GameCard from '../components/Game/GameCard';
// import { fetchTeams } from '../actions/teams';
// import { fetchTodaysGames } from '../actions/games';
// import { fetchVotes } from '../actions/vote';

// import classes from './GameContainer.module.css';
// import { Button } from 'antd'

// class GameContainer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     componentDidMount() {
//         this.props.fetchTeams()
//         this.props.fetchTodaysGames()
//         if (!!this.props.currentUser.id) {
//             this.props.fetchVotes(this.props.currentUser.id)
//         }
//     }

//     render() {
//         const { teams, games, votes } = this.props
//         // console.log("GAME CONT", votes)
//         let loggedIn = !!this.props.currentUser.id
//         if (games.data === false || teams.data === false) {
//             return null
//         }
//         if (loggedIn)
//         {return (
//             <div className={classes.GameContainer}>
//                 {games.data.map((game) => {

//                     let awayTeam = teams.data.filter(team => team.id === game.away_team)

//                     let homeTeam = teams.data.filter(team => team.id === game.home_team)

//                     let gameVote = votes.data.filter(vote => vote.game === game.id)

//                     return <GameCard key={`game-${game.id}`} game={game} currentUser={this.props.currentUser} awayTeam={awayTeam[0]} homeTeam={homeTeam[0]} gameVote={gameVote[0]} handleVote={this.handleVote} />
//                 })}
//                 <Button type="primary">Button</Button>
//             </div>
//         )}
//         return (
//             <div className={classes.GameContainer}>
//                 {games.data.map((game) => {

//                     let awayTeam = teams.data.filter(team => team.id === game.away_team)

//                     let homeTeam = teams.data.filter(team => team.id === game.home_team)


//                     return <GameCard key={`game-${game.id}`} game={game} currentUser={this.props.currentUser} awayTeam={awayTeam[0]} homeTeam={homeTeam[0]} handleVote={this.handleVote} />
//                 })}
//             </div>
//         )
//     }
// }

// const mapStateToProps = state => {
//     return {
//         teams: state.teams,
//         votes: state.votes,
//         games: state.games
//     }
// }

// export default connect(mapStateToProps, { fetchTeams, fetchTodaysGames, fetchVotes })(GameContainer);
