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
      categories: ['team', 'batting', 'pitching'],
    };
  }

  componentDidMount() {
    const { getStats, match, stats } = this.props;
    getStats(match.params.id);

    if (stats.home) {
      this.setState({
        home: stats.home.team,
      });
    }
  }

    backButton = () => {
      const { history } = this.props;
      history.push('/');
    }

    changeStat = (e) => {
      const { stats } = this.props;
      // dataset.team = home or away. name = name of category
      const { name, dataset } = e.target;
      // Toogle showing and hiding stats if clicking button for same stat
      if (this.state[dataset.team] === stats[dataset.team][name]) {
        this.setState({
          [dataset.team]: null,
        });
      } else {
        // If you click a different button display new stats
        this.setState({
          [dataset.team]: stats[dataset.team][name],
        });
      }
    }

    renderButton = (team) => this.state.categories.map((cat, index) => <button key={`home-${cat}`} type="button" data-team={team} name={cat} onClick={this.changeStat}>{cat}</button>)

    render() {
      console.log('Game Page', this.props);
      console.log('Game Page State', this.state);
      const { homeTeam, awayTeam } = this.props.location.state;
      if (this.props.stats.home) {
        return (
          <div className={classes.GamePage}>
            <h1><Link to="/">Back to games</Link></h1>
            <button type="button" onClick={this.backButton}>backButton</button>
            <h2>
              {homeTeam.name}
              {' '}
VS
              {' '}
              {awayTeam.name}
            </h2>
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
            <CommentContainer game_id={this.props.location.state.game_id} />
          </div>
        );
      }
      return null;
    }
}

const mapStateToProps = (state) => ({
  stats: state.stats,
});

const mapDispatchToProps = (dispatch) => ({
  getStats: (id) => dispatch(fetchGameTeamStats(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
