import React from 'react';
import { connect } from 'react-redux';

import TeamCard from '../components/Team/TeamCard';

import classes from './TeamContainer.module.css';

class TeamContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVote: ''
        };
    }

    componentDidMount() {
        if (this.props.vote) {
            this.setState({
                 currentVote: this.props.vote.team
           })
        }
    }
    shouldComponentUpdate(prevProps) {
        return this.props.votes !== prevProps.votes
    }
    

    voteButtonTeam = (id) => {
        this.setState({
            currentVote: id
        })
    }



    render() {

        let awayVotes = this.props.numVotes.find(numVote => (numVote.team_id === this.props.awayTeam.id) && (numVote.game_id === this.props.gameID))

        let homeVotes = this.props.numVotes.find(numVote => (numVote.team_id === this.props.homeTeam.id) && (numVote.game_id === this.props.gameID))

        return (
            <div className={classes.TeamContainer}>
                <TeamCard team={this.props.awayTeam} 
                    gameID={this.props.gameID} 
                    numVotes={awayVotes}
                    currentVote={this.state.currentVote}
                    vote={this.props.vote}
                    voteButtonTeam={this.voteButtonTeam}
                    />
                <TeamCard team={this.props.homeTeam} 
                    gameID={this.props.gameID} 
                    numVotes={homeVotes}
                    currentVote={this.state.currentVote}
                    vote={this.props.vote}
                    voteButtonTeam={this.voteButtonTeam}
                    />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        votes: state.votes.votes,
        numVotes: state.numVotes.numVotes
    }
}

    export default connect(mapStateToProps)(TeamContainer);
