import React from 'react';
import TeamStats from './TeamStats';
import { connect } from 'react-redux';

class TeamStatsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: ['team', 'batting', 'pitching']
        };
      }

      renderButton = (team) => {
        return this.state.categories.map((cat, index) => {
            return <button key={`home-${cat}`} type='button' data-team={team} name={cat} onClick={() => this.props.changeStat}>{cat}</button>
        })
    }

    // changeStat = (e) => {
    //     console.log(e.target.dataset.team)
    //     let x = e.target.name
    //     let y = e.target.dataset.team
    //     this.setState({
    //         [y]: this.props.stats[y][x],
    //     })
    // }

    render() {
        console.log("NEW", this.props)
        return(
            <div>
                {this.renderButton('home')}
                <TeamStats stats={this.props.stats} name={this.props.name} />
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        stats: state.stats
    }
}

export default connect(mapStateToProps)(TeamStatsContainer);