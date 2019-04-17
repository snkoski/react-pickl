import React, { Component } from 'react';
import './App.css';

import GameContainer from './containers/GameContainer';
import Fetch from './containers/fetch';
import GamesSplit from './containers/GamesSplit';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<GameContainer />*/}
        <GamesSplit />
        {/*<Fetch />*/}

      </div>
    );
  }
}

export default App;
