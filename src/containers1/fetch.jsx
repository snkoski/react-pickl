import React, { Component } from 'react';
import '../App.css';


class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: null,
      teams: null
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/games/today')
      .then(response => response.json())
      .then(games => this.setState({ games }));
    fetch('http://localhost:5000/api/teams')
      .then(response => response.json())
      .then(teams => this.setState({ teams }))
    console.log(this.state);
  }


  render() {
    console.log("IN RENDER", this.state)

    return (
      <h1>hello</h1>
    )
  }
}

export default Fetch;
