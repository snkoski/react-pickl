import React, { Component } from 'react';
import classes from './TeamStats.module.css';

const upperFirst = (str) => {
    let splitString = str.toLowerCase().split('_');
    let newArr = [];
    for (let i in splitString) {
        let splitWord = splitString[i].split('');
        splitWord[0] = splitWord[0].toUpperCase();
        let newWord = splitWord.join('');
        newArr.push(newWord);
    }
    return newArr.join(' ');

}

class TeamStats extends Component {

    render() {
        const { name, stats } = this.props;
        return (
            <div className={classes.Hi}>
                <h1>{name}</h1>
                {stats && <ul>
                    {Object.keys(stats).map((keyName, i) => {
                        return <li key={i}>
                            <span>{upperFirst(keyName)}: {stats[keyName]}</span>
                        </li>
                    })}
                    </ul>}
            </div>
        )
    }
}

export default TeamStats;
