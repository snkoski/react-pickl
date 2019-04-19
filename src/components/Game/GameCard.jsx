import React, { Component } from 'react';

import TeamContainer from '../../containers/TeamContainer';
import classes from './GameCard.module.css';

const GameCard = props => {
    console.log("GAME CARD", props)
    return (
    <div className={classes.GameCard}>
        <TeamContainer homeTeam={props.homeTeam} awayTeam={props.awayTeam}/>
        <p>{props.game.location}</p>
        <p>{props.game.time}</p>
    </div>)
};

export default GameCard;