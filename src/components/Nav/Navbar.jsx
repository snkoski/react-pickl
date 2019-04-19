import React , { Component } from 'react';

import classes from './Nav.module.css';

class Navbar extends Component {

    render() {
        return (
            <div className={classes.nav}>
                <h1 className={classes.logo}>Pickl</h1>
                <h1>Login</h1>
            </div>
            )
    }
}

export default Navbar;