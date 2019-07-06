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
    shouldComponentUpdate(prevProps) {
        console.log("SHOULD COMPONENT UPDATE PREV:", prevProps.votes)
        console.log("________________________________________________")
        console.log("SHOULD COMPONENT UPDATE new:", this.props.votes)
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
        if (this.props.vote) {
            console.log("[TEAM CONTAINER] DID MOUNT", this.props)
            this.setState({
                 currentVote: this.props.vote.team
           })
        }
        return (
            <div className={classes.TeamContainer}>
                <TeamCard team={this.props.awayTeam} 
                    gameID={this.props.gameID} 
                    // handleVote={this.props.handleVote} 
                    // gameColor={this.state.gameColor} 
                    // buttonToggle={this.toggleButtonColor} 
                    // votedTeam={this.state.votedTeam} 
                    // teamContainerVote={this.state.teamContainerVote}
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
                    currentVote={this.state.currentVote}
                    vote={this.props.vote}
                    voteButtonTeam={this.voteButtonTeam}
                    />
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("[Team Container] mapStateToProps")
    return {
        votes: state.votes.votes
    }
}

    export default connect(mapStateToProps)(TeamContainer);
