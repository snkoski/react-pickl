import React from 'react';
import PropTypes from 'prop-types';

import TeamContainer from '../../containers/TeamContainer';

import classes from './GameCard.module.css';

const GameCard = props => {

    const formatTime = (time) => {
        let splitTime = time.split(':');
        let hour = splitTime[0];
        let dd = 'AM';
        hour = parseInt(hour, 10)
        if (hour > 12) {
            hour = hour - 12;
            dd = 'PM';
        }
        let minute = splitTime[1];
        let newTime = [hour,minute].join(':') + ` ${dd}`

        return newTime
    }

    return (
    <div className={classes.GameCard}>
        <TeamContainer homeTeam={props.homeTeam} awayTeam={props.awayTeam} gameID={props.game.id} gameVote={props.gameVote} handleVote={props.handleVote} user={props.currentUser}/>
        <p>{props.game.location}</p>
        <p>{formatTime(props.game.time)}</p>
    </div>)
};

GameCard.propTypes = {
    awayTeam: PropTypes.object,
    homeTeam: PropTypes.object,
    game: PropTypes.object,
    handleVote: PropTypes.func
}

export default GameCard;
