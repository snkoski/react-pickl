import React from 'react';
import PropTypes from 'prop-types';

import TeamContainer from '../../containers/TeamContainer';

import classes from './GameCard.module.css';

const GameCard = props => {
    return (
    <div className={classes.GameCard}>
        <TeamContainer homeTeam={props.homeTeam} awayTeam={props.awayTeam} gameID={props.game.id} gameVote={props.gameVote} handleVote={props.handleVote} user={props.currentUser}/>
        <p>{props.game.location}</p>
        <p>{props.game.time}</p>
    </div>)
};

GameCard.propTypes = {
    awayTeam: PropTypes.object,
    homeTeam: PropTypes.object,
    game: PropTypes.object,
    handleVote: PropTypes.func
}

export default GameCard;
