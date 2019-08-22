import React from 'react';
import { connect } from 'react-redux';
import { fetchUserStats} from '../../actions/user';
import classes from './UserProfile.module.css';


class UserProfile extends React.Component {

    componentDidMount() {
        this.props.getStats()
    }

    render() {
        console.log(this.props)
        const { stats } = this.props.user;
        if (!!stats) {
            return(
                <div className={classes.UserProfile}>
                    Total Votes: {stats.total_votes}
                    <br></br>
                    Correct Votes: {stats.correct_votes}
                    <br></br>
                    Percentage Correct: {stats.pct}
                </div>
            )
        } else {
            return(
                <div className={classes.UserProfile}>
                    No Stats :(
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getStats: (username) => dispatch(fetchUserStats(username))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);