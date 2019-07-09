import React from 'react';
import PropTypes from 'prop-types';
import VoteButton from '../Vote/VoteButton';

import classes from './TeamCard.module.css';

const TeamCard = props => {
    let votedOn = false;
    if (props.vote && props.vote.team === props.team.id) {
        votedOn = true
    }

    let voteCount = 0; 
    if (props.numVotes) {
        voteCount = props.numVotes.num_votes
    }

    return(
    <div className={classes.TeamCard}>
        <p className={classes.City}>{props.team.city}</p>
        <p className={classes.Name}>{props.team.name}</p>
        <img className={`${votedOn ? '' : classes.BlackAndWhite}`} src={props.team.logo} alt="Team Logo"/>
        <p>{voteCount}</p>
        <VoteButton  teamID={props.team.id} gameID={props.gameID}  voteButtonTeam={props.voteButtonTeam} votedOn={votedOn}/>
    </div>
)};

TeamCard.propTypes = {
    gameID: PropTypes.number,
    team: PropTypes.object
}

export default TeamCard;
