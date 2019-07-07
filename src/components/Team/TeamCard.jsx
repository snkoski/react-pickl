import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VoteButton from '../Vote/VoteButton';

import classes from './TeamCard.module.css';

const TeamCard = props => {
    let votedOn = false;
    if (props.vote && props.vote.team === props.team.id) {
        votedOn = true
    }
    // if (props.currentVote && props.currentVote === props.team.id) {
    //     votedOn = true
    // }
    let v = 0; 
    if (props.numVotes) {
        v = props.numVotes.num_votes
    }

    return(
    <div className={classes.TeamCard}>
        <p className={classes.City}>{props.team.city}</p>
        <p className={classes.Name}>{props.team.name}</p>
        <img className={`${votedOn ? '' : classes.BlackAndWhite}`} src={props.team.logo} alt="Team Logo"/>
        <p>{v}</p>
        <VoteButton  teamID={props.team.id} gameID={props.gameID}  voteButtonTeam={props.voteButtonTeam} votedOn={votedOn}/>
    </div>
)};

TeamCard.propTypes = {
    gameID: PropTypes.number,
    team: PropTypes.object
}

export default TeamCard;
