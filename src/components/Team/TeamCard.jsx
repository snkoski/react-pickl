import React from 'react';
import VoteButton from '../Vote/VoteButton';

import classes from './TeamCard.module.css';

const TeamCard = props => {
    console.log("TEAM CARD", props)
    return(
    <div className={classes.TeamCard}>
        <p className={classes.City}>{props.team.city}</p>
        <p className={classes.Name}>{props.team.name}</p>
        <img src={props.team.logo} alt="Team Logo"/>
        <VoteButton currentUser={props.currentUser} teamID={props.team.id} gameID={props.gameID} handleVote={props.handleVote} />
    </div>
)};

export default TeamCard;