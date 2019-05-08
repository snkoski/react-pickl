import React from 'react';
import PropTypes from 'prop-types';
import VoteButton from '../Vote/VoteButton';

import classes from './TeamCard.module.css';

const TeamCard = props => {
    console.log("TEAM CARD", !!props.gameColor)
    return(
    <div className={classes.TeamCard}>
        <p className={classes.City}>{props.team.city}</p>
        <p className={classes.Name}>{props.team.name}</p>
        <img src={props.team.logo} alt="Team Logo"/>
        <VoteButton  teamID={props.team.id} gameID={props.gameID} gameColor={props.gameColor} buttonToggle={props.buttonToggle} />
    </div>
)};

TeamCard.propTypes = {
    gameID: PropTypes.number,
    team: PropTypes.object
}

export default TeamCard;
