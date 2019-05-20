import React from 'react';

import TeamCard from '../components/Team/TeamCard';

import classes from './TeamContainer.module.css';

class TeamContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamContainerVote: ''
        };
    }

    componentDidMount() {
        if (!!this.props.gameVote) {
            this.setState({
                teamContainerVote: this.props.gameVote.team
            })
        }
    }

    voteButtonTeam = (id) => {
        this.setState({
            teamContainerVote: id
        })
    }

    render() {
        console.log("TEAM CONTAINER", this.props)
        return (
            <div className={classes.TeamContainer}>
                <TeamCard team={this.props.homeTeam} gameID={this.props.gameID} handleVote={this.props.handleVote} gameColor={this.state.gameColor} buttonToggle={this.toggleButtonColor} votedTeam={this.state.votedTeam} teamContainerVote={this.state.teamContainerVote}
                voteButtonTeam={this.voteButtonTeam}/>
                <TeamCard team={this.props.awayTeam} gameID={this.props.gameID} handleVote={this.props.handleVote} gameColor={this.state.gameColor} buttonToggle={this.toggleButtonColor} votedTeam={this.state.votedTeam} teamContainerVote={this.state.teamContainerVote} voteButtonTeam={this.voteButtonTeam}/>
            </div>
        )
    }}
    export default TeamContainer;
