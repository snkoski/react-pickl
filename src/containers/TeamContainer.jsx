import React from 'react';

import TeamCard from '../components/Team/TeamCard';
import classes from './TeamContainer.module.css';

const TeamContainer = props => {
    console.log("TEAM CONTAINER", props)
    return (
    <div className={classes.TeamContainer}>
        <TeamCard currentUser={props.currentUser} team={props.homeTeam} gameID={props.gameID} handleVote={props.handleVote} />
        <TeamCard currentUser={props.currentUser} team={props.awayTeam} gameID={props.gameID} handleVote={props.handleVote} />
    </div>
)};

export default TeamContainer;