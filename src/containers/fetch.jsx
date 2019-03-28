import React, { Component } from 'react';
import '../App.css';


class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('http://skoski.pythonanywhere.com/teams')
      .then(response => response.json())
      .then(data => this.setState({ data }));
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
