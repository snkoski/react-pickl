import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';


class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    backButton = (e) => {
        console.log(e)
        this.props.history.push('/')
    }
    render() {
        console.log("GAME PAGE", this.props)
        const { homeTeam, awayTeam } = this.props.location.state
        return (
            <div>
                <h1><Link to='/'>Back to games</Link></h1>
                <button onClick={this.backButton}>backButton</button>
                <h1>THIS WILL BE THE GAME PAGE</h1>
                <h2>{homeTeam.name} VS {awayTeam.name}</h2>
                
            </div>
        )
    }
}

export default GamePage;