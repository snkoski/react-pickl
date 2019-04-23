import React from 'react';
import PropTypes from 'prop-types';
import VoteButton from '../Vote/VoteButton';

import classes from './TeamCard.module.css';

const TeamCard = props => {
    // console.log("TEEAMCARD", props)
    return(
    <div className={classes.TeamCard}>
        <p className={classes.City}>{props.team.city}</p>
        <p className={classes.Name}>{props.team.name}</p>
        <img src={props.team.logo} alt="Team Logo"/>
        <VoteButton  teamID={props.team.id} gameID={props.gameID} handleVote={props.handleVote} />
    </div>
)};

TeamCard.propTypes = {
    gameID: PropTypes.number,
    // handleVote:
    team: PropTypes.object
}

export default TeamCard;
