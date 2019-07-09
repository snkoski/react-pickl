import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CommentContainer from '../../containers/CommentContainer';
import classes from './GamePage.module.css';

class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    backButton = (e) => {
        this.props.history.push('/')
    }
    
    render() {
        const { homeTeam, awayTeam } = this.props.location.state
        return (
            <div className={classes.GamePage}>
                <h1><Link to='/'>Back to games</Link></h1>
                <button onClick={this.backButton}>backButton</button>
                <h2>{homeTeam.name} VS {awayTeam.name}</h2>
                <h1>THIS WILL BE THE GAME PAGE</h1>
                <CommentContainer game_id={this.props.location.state.game_id}/>
                
            </div>
        )
    }
}

export default GamePage;