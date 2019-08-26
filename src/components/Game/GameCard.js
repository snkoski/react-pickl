import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import TeamContainer from '../../containers/TeamContainer';

import classes from './GameCard.module.css';

const GameCard = (props) => {
  const formatTime = (time) => {
    const splitTime = time.split(':');
    let hour = splitTime[0];
    let dd = 'AM';
    hour = parseInt(hour, 10);
    if (hour > 12) {
      hour -= 12;
      dd = 'PM';
    }
    const minute = splitTime[1];
    const newTime = `${[hour, minute].join(':')} ${dd}`;

    return newTime;
  };
  const {
    homeTeam, awayTeam, game, vote, currentUser,
  } = props;
  return (
    <div className={classes.GameCard}>
      <TeamContainer
        homeTeam={homeTeam}
        awayTeam={awayTeam}
        gameID={game.id}
        vote={vote}
        user={currentUser}
      />
      <p>{game.location}</p>
      <p>{formatTime(game.time)}</p>
      <Link to={{
        pathname: `/games/${game.id}`,
        state: {
          homeTeam,
          awayTeam,
          game_id: game.id,
        },
      }}
      >
        <button>Check out the matchup</button>
      </Link>
    </div>
  );
};

GameCard.propTypes = {
  awayTeam: PropTypes.object,
  homeTeam: PropTypes.object,
  game: PropTypes.object,
  handleVote: PropTypes.func,
};

export default GameCard;
