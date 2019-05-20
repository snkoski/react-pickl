import React from 'react';

import TeamCard from '../components/Team/TeamCard';
import classes from './TeamContainer.module.css';
import DoubleVote from '../components/Vote/DoubleVote';

// const TeamContainer = props => {
//     let gameColor = true
//     if (!!props.gameVote && props.gameVote.team === props.awayTeam.id) {
//         gameColor = false
//     }

//     const toggleButtonColor = (e) => {
//         gameColor = !gameColor
//         console.log("TOGGLE", gameColor)
//     }

//     console.log("TEAM CONT", gameColor, props)
//     return (
//     <div className={classes.TeamContainer}>
//         <TeamCard team={props.homeTeam} gameID={props.gameID} handleVote={props.handleVote} gameColor={gameColor} buttonToggle={toggleButtonColor} />
//         <TeamCard team={props.awayTeam} gameID={props.gameID} handleVote={props.handleVote} gameColor={!gameColor} buttonToggle={toggleButtonColor} />
//     </div>
// )};

// export default TeamContainer;

class TeamContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamContainerVote: ''
        };
    }

    componentDidMount() {
        // if (!!this.props.gameVote && this.props.gameVote.team === this.props.awayTeam.id) {
        //     this.setState({
        //         gameColor: true
        //     })
        // } 

        // if (!!this.props.gameVote && this.props.gameVote.team === this.props.homeTeam.id) {
        //     this.setState({
        //         gameColor: true
        //     })
        // } 
        // if (!!this.props.gameVote && this.props.gameVote.team) {
        //     this.setState({
        //         votedTeam: this.props.gameVote.team
        //     })
        // }
        // console.log("TEAM C", this.props.gameVote)
        if (!!this.props.gameVote) {
            this.setState({
                teamContainerVote: this.props.gameVote.team
            })
        }
    }
    

    toggleButtonColor = () => {
        // if (this.state.votedTeam)
        // this.setState({
        //     gameColor: !this.state.gameColor
        // })
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
                <TeamCard team={this.props.homeTeam} gameID={this.props.gameID} handleVote={this.props.handleVote} gameColor={this.state.gameColor} buttonToggle={this.toggleButtonColor} votedTeam={this.state.votedTeam} teamContainerVote={this.state.teamContainerVote}/>
                <TeamCard team={this.props.awayTeam} gameID={this.props.gameID} handleVote={this.props.handleVote} gameColor={this.state.gameColor} buttonToggle={this.toggleButtonColor} votedTeam={this.state.votedTeam} teamContainerVote={this.state.teamContainerVote}/>
                <DoubleVote game={this.props.gameID} home={this.props.homeTeam} away={this.props.awayTeam} voteButtonTeam={this.voteButtonTeam}/>
            </div>
        )
    }}
    export default TeamContainer;
