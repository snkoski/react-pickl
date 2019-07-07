import React from 'react';
import { connect } from 'react-redux';

import TeamCard from '../components/Team/TeamCard';

import classes from './TeamContainer.module.css';

class TeamContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVote: ''
        };
    }

    // componentDidMount() {
    //     if (!!this.props.gameVote) {
    //         this.setState({
    //             teamContainerVote: this.props.gameVote.team
    //         })
    //     }
    // }
    // componentDidMount() {
    //     console.log("[Team Container] DID MOUNT", this.props)
    //     let vote = this.props.votes.filter(vote => {
    //         return this.props.gameID === vote.game
    //     })
    //     if (vote[0]) {
    //         this.setState({
    //             currentVote: vote[0].team
    //         })
    //     }
        
    // }
    // componentDidMount() {
    //     if (this.props.vote[0]) {
    //         console.log("[TEAM CONTAINER] DID MOUNT", this.props)
    //         this.setState({
    //              currentVote: this.props.vote[0].team
    //        })
    //     }
    // }
    componentDidMount() {
        if (this.props.vote) {
            this.setState({
                 currentVote: this.props.vote.team
           })
        }
    }
    shouldComponentUpdate(prevProps) {
        return this.props.votes !== prevProps.votes
    }
    

    voteButtonTeam = (id) => {
        this.setState({
            currentVote: id
        })
    }



    render() {
        // let currentVote = this.props.votes.filter(vote => {
        //     return this.props.gameID === vote.game
        // })
        // if (this.props.vote) {
        //     this.setState({
        //          currentVote: this.props.vote.team
        //    })
        // }

        let awayVotes = this.props.numVotes.find(numVote => (numVote.team_id === this.props.awayTeam.id) && (numVote.game_id === this.props.gameID))

        let homeVotes = this.props.numVotes.find(numVote => (numVote.team_id === this.props.homeTeam.id) && (numVote.game_id === this.props.gameID))

        return (
            <div className={classes.TeamContainer}>
                <TeamCard team={this.props.awayTeam} 
                    gameID={this.props.gameID} 
                    // handleVote={this.props.handleVote} 
                    // gameColor={this.state.gameColor} 
                    // buttonToggle={this.toggleButtonColor} 
                    // votedTeam={this.state.votedTeam} 
                    // teamContainerVote={this.state.teamContainerVote}
                    numVotes={awayVotes}
                    currentVote={this.state.currentVote}
                    vote={this.props.vote}
                    voteButtonTeam={this.voteButtonTeam}
                    />
                <TeamCard team={this.props.homeTeam} 
                    gameID={this.props.gameID} 
                    // handleVote={this.props.handleVote} 
                    // gameColor={this.state.gameColor} 
                    // buttonToggle={this.toggleButtonColor} 
                    // votedTeam={this.state.votedTeam} 
                    // teamContainerVote={this.state.teamContainerVote}
                    numVotes={homeVotes}
                    currentVote={this.state.currentVote}
                    vote={this.props.vote}
                    voteButtonTeam={this.voteButtonTeam}
                    />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        votes: state.votes.votes,
        numVotes: state.numVotes.numVotes
    }
}

    export default connect(mapStateToProps)(TeamContainer);
