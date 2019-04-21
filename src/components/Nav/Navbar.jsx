import React , { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './Nav.module.css';

class Navbar extends Component {

    render() {
        return (
            <div className={classes.nav}>
                <h1 className={classes.logo}>Pickl</h1>
                <h1><Link to='/login'>Login</Link></h1>
                <h1 onClick={this.props.onLogout}>Logout</h1>
            </div>
            )
    }
}

export default Navbar;