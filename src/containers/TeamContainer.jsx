import React, { Component } from 'react';

import TeamCard from '../components/Team/TeamCard';
import classes from './TeamContainer.module.css';

const TeamContainer = props => {
    console.log("TEAM CONTAINER", props)
    return (
    <div className={classes.TeamContainer}>
        <TeamCard team={props.homeTeam} />
        <TeamCard team={props.awayTeam} />
    </div>
)};

export default TeamContainer;