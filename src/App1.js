import React, { Component } from 'react';
import './App.css';

import GameContainer from './containers1/GameContainer';
import Fetch from './containers1/fetch';
import GamesSplit from './containers1/GamesSplit';


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
