import React from 'react';

import TeamCard from '../components/Team/TeamCard';
import classes from './TeamContainer.module.css';

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
        };
    }

    componentDidMount() {
        if (!!this.props.gameVote && this.props.gameVote.team === this.props.awayTeam.id) {
            this.setState({
                gameColor: false
            })
        } 

        if (!!this.props.gameVote && this.props.gameVote.team === this.props.homeTeam.id) {
            this.setState({
                gameColor: true
            })
        } 
        console.log("TEAM C", this.props.gameVote)
    }
    

    toggleButtonColor = () => {
        this.setState({
            gameColor: !this.state.gameColor
        })
    }

    render() {
        return (
            <div className={classes.TeamContainer}>
                <TeamCard team={this.props.homeTeam} gameID={this.props.gameID} handleVote={this.props.handleVote} gameColor={this.state.gameColor} buttonToggle={this.toggleButtonColor} />
                <TeamCard team={this.props.awayTeam} gameID={this.props.gameID} handleVote={this.props.handleVote} gameColor={this.state.gameColor} buttonToggle={this.toggleButtonColor} />
            </div>
        )
    }}
    export default TeamContainer;
