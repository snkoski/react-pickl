import React, { Component } from 'react';

import Navbar from './components/Nav/Navbar';
import GameContainer from './containers/GameContainer';

class App3 extends Component {
    render() {
      return (
        <div className="App">
          <Navbar />
          <GameContainer />
        </div>
      );
    }
  }
  
  export default App3;
  