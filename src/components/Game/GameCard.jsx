import React from 'react';

import TeamContainer from '../../containers/TeamContainer';
import classes from './GameCard.module.css';

const GameCard = props => {
    let GCLogged = !! props.currentUser.id
    console.log("GAME CARD RENDER", props)
    return (
    <div className={classes.GameCard}>
        <TeamContainer currentUser={props.currentUser} homeTeam={props.homeTeam} awayTeam={props.awayTeam} gameID={props.game.id} handleVote={props.handleVote} />
        <p>{props.game.location}</p>
        <p>{props.game.time}</p>
    </div>)
};

export default GameCard;