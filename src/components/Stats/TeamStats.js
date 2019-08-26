import React, { Component } from 'react';
import classes from './TeamStats.module.css';

const upperFirst = (str) => {
  const splitString = str.toLowerCase().split('_');
  const newArr = [];
  for (const i in splitString) {
    const splitWord = splitString[i].split('');
    splitWord[0] = splitWord[0].toUpperCase();
    const newWord = splitWord.join('');
    newArr.push(newWord);
  }
  return newArr.join(' ');
};

// eslint-disable-next-line react/prefer-stateless-function
class TeamStats extends Component {
  render() {
    const { name, stats } = this.props;
    return (
      <div className={classes.Hi}>
        <h1>{name}</h1>
        {stats && (
        <ul>
          {Object.keys(stats).map((keyName, i) => (
            <li key={i}>
              <span>
                {upperFirst(keyName)}
:
                {' '}
                {stats[keyName]}
              </span>
            </li>
          ))}
        </ul>
        )}
      </div>
    );
  }
}

export default TeamStats;
