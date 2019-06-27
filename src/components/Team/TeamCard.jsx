import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VoteButton from '../Vote/VoteButton';

import classes from './TeamCard.module.css';

const TeamCard = props => {
    return(
    <div className={classes.TeamCard}>
        <p className={classes.City}>{props.team.city}</p>
        <p className={classes.Name}>{props.team.name}</p>
        <img className={`${props.teamContainerVote === props.team.id ? '' : classes.BlackAndWhite}`} src={props.team.logo} alt="Team Logo"/>
        <VoteButton  teamID={props.team.id} gameID={props.gameID}  voteButtonTeam={props.voteButtonTeam} />
    </div>
)};

TeamCard.propTypes = {
    gameID: PropTypes.number,
    team: PropTypes.object
}

export default TeamCard;
