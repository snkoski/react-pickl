import React, { Component } from 'react';
import '../App.css';

import GameCardSplit from '../components/Game/GameCardSplit';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        games: [
          {
            id: "51273",
            scheduleStatus: "Normal",
            originalDate: null,
            originalTime: null,
            delayedOrPostponedReason: null,
            date: "2019-03-28",
            time: "1:05PM",
            awayTeam: "127",
            homeTeam: "126",
            location: "Nationals Park"
          },
          {
              id: "51272",
              scheduleStatus: "Normal",
              originalDate: null,
              originalTime: null,
              delayedOrPostponedReason: null,
              date: "2019-03-28",
              time: "1:05PM",
              awayTeam: "111",
              homeTeam: "114",
              location: "Yankee Stadium"
          }
        ],
        teams: [
          {
            ID: "127",
            City: "New York",
            Name: "Mets",
            Abbreviation: "NYM",
            Logo: "https://www.mlbstatic.com/mlb.com/images/share/121.jpg"
        },
        {
            ID: "126",
            City: "Washington",
            Name: "Nationals",
            Abbreviation: "WAS",
            Logo: "https://www.mlbstatic.com/mlb.com/images/share/120.jpg"
        },
        {
            ID: "111",
            City: "Baltimore",
            Name: "Orioles",
            Abbreviation: "BAL",
            Logo: "https://www.mlbstatic.com/mlb.com/images/share/110.jpg"
        },
        {
            ID: "114",
            City: "New York",
            Name: "Yankees",
            Abbreviation: "NYY",
            Logo: "https://www.mlbstatic.com/mlb.com/images/share/147.jpg"
        }
      ]
    }
  }

  render() {
    return (
      <div className="GameContainer">
        {this.state.games.map((game) => {

          let awayTeam = this.state.teams.filter(team => team.ID === game.awayTeam)

          let homeTeam = this.state.teams.filter(team => team.ID === game.homeTeam)

          return <GameCardSplit game={game} awayTeam={awayTeam[0]} homeTeam={homeTeam[0]}/>
        })}
      </div>
    )
  }
}

export default GameContainer;
