import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGameTeamStats } from '../../actions/stats';

import TeamStats from '../Stats/TeamStats';
// import TeamStatsContainer from '../Stats/TeamStatsContainer';
import CommentContainer from '../../containers/CommentContainer';
import classes from './GamePage.module.css';

class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: ['team', 'batting', 'pitching']
        };
      }

      componentDidMount() {
        this.props.getStats(this.props.match.params.id);
        
        if (this.props.stats.home) {
            this.setState({
                home: this.props.stats.home.team
            })
        }
    }

    backButton = (e) => {
        this.props.history.push('/')
    }

    changeStat = (e) => {
        // dataset.team = home or away. name = name of category
        const { name, dataset } = e.target;
        // Toogle showing and hiding stats if clicking button for same stat
        if (this.state[dataset.team] === this.props.stats[dataset.team][name]) {
            this.setState({
                [dataset.team]: null,
            })
        } else {
            // If you click a different button display new stats
            this.setState({
                [dataset.team]: this.props.stats[dataset.team][name],
            })
        }
    }

    renderButton = (team) => {
        return this.state.categories.map((cat, index) => {
            return <button key={`home-${cat}`} type='button' data-team={team} name={cat} onClick={this.changeStat}>{cat}</button>
        })
    }
    
    render() {
        console.log("Game Page", this.props)
        console.log("Game Page State", this.state)
        const { homeTeam, awayTeam } = this.props.location.state
        if (!!this.props.stats.home) {
            return (
                <div className={classes.GamePage}>
                    <h1><Link to='/'>Back to games</Link></h1>
                    <button onClick={this.backButton}>backButton</button>
                    <h2>{homeTeam.name} VS {awayTeam.name}</h2>
                    <div className={classes.GamePageStats}>
                        <div className={classes.SubGrid}>
                            {this.renderButton('home')}
                            <TeamStats stats={this.state.home} name={homeTeam.name} />
                        </div>
                        <div className={classes.SubGrid}>
                            {this.renderButton('away')}
                            <TeamStats stats={this.state.away} name={awayTeam.name} />
                        </div>
                    </div>
                        <CommentContainer game_id={this.props.location.state.game_id}/>
                </div>
            )
        } else {
            return null;
        }
    }
}

const mapStateToProps = state => {
    return {
        stats: state.stats
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getStats: (id) => dispatch(fetchGameTeamStats(id)),
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);