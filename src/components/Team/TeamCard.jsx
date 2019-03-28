import React, { Component } from 'react';
import '../../App.css';

import logo from '../../assets/images/logo127.jpg'


class TeamCard extends Component {
  render() {
    return <div className="TeamCard">
      <img src={this.props.team.Logo} alt={"Mets Logo"} width={"40px"} height={"40px"} />
      <div className="NameDiv"><h3>{`${this.props.team.City} ${this.props.team.Name}`}</h3></div>
      <div><p>Win Lose Record</p></div>
    </div>
  }
}

export default TeamCard;
