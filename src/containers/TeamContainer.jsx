import React, { Component } from 'react';

import TeamCard from '../components/Team/TeamCard';
import classes from './TeamContainer.module.css';

const TeamContainer = props => {
    return (
    <div className={classes.TeamContainer}>
        <TeamCard team={props.homeTeam} gameID={props.gameID} handleVote={props.handleVote} />
        <TeamCard team={props.awayTeam} gameID={props.gameID} handleVote={props.handleVote} />
    </div>
)};

export default TeamContainer;