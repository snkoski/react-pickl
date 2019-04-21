import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import GameContainer from './GameContainer';
import Home from './Home';

// class Main extends Component {

//     render() {
//         return (
//             <GameContainer />
//         )
//     }
// }
const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/games' component={GameContainer} />
            </Switch>
        </main>
    )
}

export default Main;