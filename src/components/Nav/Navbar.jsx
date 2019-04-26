import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeUser } from '../../actions/user';
import { removeVotes } from '../../actions/vote';


import classes from './Nav.module.css';

class Navbar extends Component {

    handleLogout = () => {
        this.props.removeUser()
        this.props.removeVotes()
    }

    render() {
        return (
            <div className={classes.nav}>
                <h1 className={classes.logo}>Pickl</h1>
                <h1><Link to='/login'>Login</Link></h1>
                <h1><Link to='/register'>Register</Link></h1>
                <h1 onClick={this.handleLogout}>Logout</h1>
            </div>
            )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        votes: state.votes
    }
}

// const mapDispatchToProps = dispatch => ({
//     addUserAction: (user) => dispatch(addUserAction(user)),
//     removeUserAction: () => dispatch(removeUserAction())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default connect(mapStateToProps, { removeUser, removeVotes })(Navbar)
// export default Navbar;