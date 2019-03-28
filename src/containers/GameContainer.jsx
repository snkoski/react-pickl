import React, { Component } from 'react';
import '../App.css';

import GameCard from '../components/Game/GameCard';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    dailygameschedule: {
        lastUdateOn: "2019-03-26 12:06:46 PM",
        gameentry: [
            {
                id: "51273",
                scheduleStatus: "Normal",
                originalDate: null,
                originalTime: null,
                delayedOrPostponedReason: null,
                date: "2019-03-28",
                time: "1:05PM",
                awayTeam: {
                    ID: "127",
                    City: "New York",
                    Name: "Mets",
                    Abbreviation: "NYM",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/121.jpg"
                },
                homeTeam: {
                    ID: "126",
                    City: "Washington",
                    Name: "Nationals",
                    Abbreviation: "WAS",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/120.jpg"
                },
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
                awayTeam: {
                    ID: "111",
                    City: "Baltimore",
                    Name: "Orioles",
                    Abbreviation: "BAL",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/110.jpg"
                },
                homeTeam: {
                    ID: "114",
                    City: "New York",
                    Name: "Yankees",
                    Abbreviation: "NYY",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/147.jpg"
                },
                location: "Yankee Stadium"
            },
            {
                id: "51271",
                scheduleStatus: "Normal",
                originalDate: null,
                originalTime: null,
                delayedOrPostponedReason: null,
                date: "2019-03-28",
                time: "2:10PM",
                awayTeam: {
                    ID: "133",
                    City: "St. Louis",
                    Name: "Cardinals",
                    Abbreviation: "STL",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/138.jpg"
                },
                homeTeam: {
                    ID: "134",
                    City: "Milwaukee",
                    Name: "Brewers",
                    Abbreviation: "MIL",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/158.jpg"
                },
                location: "Miller Park"
            },
            {
                id: "51270",
                scheduleStatus: "Normal",
                originalDate: null,
                originalTime: null,
                delayedOrPostponedReason: null,
                date: "2019-03-28",
                time: "3:05PM",
                awayTeam: {
                    ID: "130",
                    City: "Atlanta",
                    Name: "Braves",
                    Abbreviation: "ATL",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/144.jpg"
                },
                homeTeam: {
                    ID: "129",
                    City: "Philadelphia",
                    Name: "Phillies",
                    Abbreviation: "PHI",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/143.jpg"
                },
                location: "Citizens Bank Park"
            },
            {
                id: "51269",
                scheduleStatus: "Normal",
                originalDate: null,
                originalTime: null,
                delayedOrPostponedReason: null,
                date: "2019-03-28",
                time: "3:37PM",
                awayTeam: {
                    ID: "117",
                    City: "Detroit",
                    Name: "Tigers",
                    Abbreviation: "DET",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/116.jpg"
                },
                homeTeam: {
                    ID: "112",
                    City: "Toronto",
                    Name: "Blue Jays",
                    Abbreviation: "TOR",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/141.jpg"
                },
                location: "Rogers Centre"
            },
            {
                id: "51277",
                scheduleStatus: "Normal",
                originalDate: null,
                originalTime: null,
                delayedOrPostponedReason: null,
                date: "2019-03-28",
                time: "4:00PM",
                awayTeam: {
                    ID: "122",
                    City: "Houston",
                    Name: "Astros",
                    Abbreviation: "HOU",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/117.jpg"
                },
                homeTeam: {
                    ID: "115",
                    City: "Tampa Bay",
                    Name: "Rays",
                    Abbreviation: "TB",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/139.jpg"
                },
                location: "Tropicana Field"
            },
            {
                id: "51274",
                scheduleStatus: "Normal",
                originalDate: null,
                originalTime: null,
                delayedOrPostponedReason: null,
                date: "2019-03-28",
                time: "4:05PM",
                awayTeam: {
                    ID: "131",
                    City: "Chicago",
                    Name: "Cubs",
                    Abbreviation: "CHC",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/112.jpg"
                },
                homeTeam: {
                    ID: "121",
                    City: "Texas",
                    Name: "Rangers",
                    Abbreviation: "TEX",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/140.jpg"
                },
                location: "Globe Life Park in Arlington"
            },
            {
                id: "51268",
                scheduleStatus: "Normal",
                originalDate: null,
                originalTime: null,
                delayedOrPostponedReason: null,
                date: "2019-03-28",
                time: "4:07PM",
                awayTeam: {
                    ID: "124",
                    City: "Los Angeles",
                    Name: "Angels",
                    Abbreviation: "LAA",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/108.jpg"

                },
                homeTeam: {
                    ID: "125",
                    City: "Oakland",
                    Name: "Athletics",
                    Abbreviation: "OAK",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/133.jpg"
                },
                location: "Oakland-Alameda County Coliseum"
            },
            {
                id: "51267",
                scheduleStatus: "Normal",
                originalDate: null,
                originalTime: null,
                delayedOrPostponedReason: null,
                date: "2019-03-28",
                time: "4:10PM",
                awayTeam: {
                    ID: "132",
                    City: "Pittsburgh",
                    Name: "Pirates",
                    Abbreviation: "PIT",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/134.jpg"
                },
                homeTeam: {
                    ID: "135",
                    City: "Cincinnati",
                    Name: "Reds",
                    Abbreviation: "CIN",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/113.jpg"
                },
                location: "Great American Ball Park"
            },
            {
                id: "51266",
                scheduleStatus: "Normal",
                originalDate: null,
                originalTime: null,
                delayedOrPostponedReason: null,
                date: "2019-03-28",
                time: "4:10PM",
                awayTeam: {
                    ID: "138",
                    City: "Colorado",
                    Name: "Rockies",
                    Abbreviation: "COL",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/115.jpg"
                },
                homeTeam: {
                    ID: "128",
                    City: "Miami",
                    Name: "Marlins",
                    Abbreviation: "MIA",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/146.jpg"
                },
                location: "Marlins Park"
            },
            {
                id: "51265",
                scheduleStatus: "Normal",
                originalDate: null,
                originalTime: null,
                delayedOrPostponedReason: null,
                date: "2019-03-28",
                time: "4:10PM",
                awayTeam: {
                    ID: "116",
                    City: "Cleveland",
                    Name: "Indians",
                    Abbreviation: "CLE",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/114.jpg"
                },
                homeTeam: {
                    ID: "120",
                    City: "Minnesota",
                    Name: "Twins",
                    Abbreviation: "MIN",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/142.jpg"
                },
                location: "Target Field"
            },
            {
                id: "51264",
                scheduleStatus: "Normal",
                originalDate: null,
                originalTime: null,
                delayedOrPostponedReason: null,
                date: "2019-03-28",
                time: "4:10PM",
                awayTeam: {
                    ID: "136",
                    City: "San Francisco",
                    Name: "Giants",
                    Abbreviation: "SF",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/137.jpg"
                },
                homeTeam: {
                    ID: "139",
                    City: "San Diego",
                    Name: "Padres",
                    Abbreviation: "SD",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/135.jpg"
                },
                location: "Petco Park"
            },
            {
                id: "51275",
                scheduleStatus: "Normal",
                originalDate: null,
                originalTime: null,
                delayedOrPostponedReason: null,
                date: "2019-03-28",
                time: "4:10PM",
                awayTeam: {
                    ID: "140",
                    City: "Arizona",
                    Name: "Diamondbacks",
                    Abbreviation: "ARI",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/109.jpg"
                },
                homeTeam: {
                    ID: "137",
                    City: "Los Angeles",
                    Name: "Dodgers",
                    Abbreviation: "LAD",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/119.jpg"
                },
                location: "Dodger Stadium"
            },
            {
                id: "51276",
                scheduleStatus: "Normal",
                originalDate: null,
                originalTime: null,
                delayedOrPostponedReason: null,
                date: "2019-03-28",
                time: "4:15PM",
                awayTeam: {
                    ID: "119",
                    City: "Chicago",
                    Name: "White Sox",
                    Abbreviation: "CWS",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/145.jpg"
                },
                homeTeam: {
                    ID: "118",
                    City: "KansasCity",
                    Name: "Royals",
                    Abbreviation: "KC",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/118.jpg"
                },
                location: "Kauffman Stadium"
            },
            {
                id: "51263",
                scheduleStatus: "Normal",
                originalDate: null,
                originalTime: null,
                delayedOrPostponedReason: null,
                date: "2019-03-28",
                time: "7:10PM",
                awayTeam: {
                    ID: "113",
                    City: "Boston",
                    Name: "Red Sox",
                    Abbreviation: "BOS",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/111.jpg"
                },
                homeTeam: {
                    ID: "123",
                    City: "Seattle",
                    Name: "Mariners",
                    Abbreviation: "SEA",
                    Logo: "https://www.mlbstatic.com/mlb.com/images/share/136.jpg"
                },
                location: "T-Mobile Park"
            }
        ]
    }
};
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: null,
  //   };
  // }
  //
  // componentDidMount() {
  //   fetch('http://skoski.pythonanywhere.com/json')
  //     .then(response => response.json())
  //     .then(data => this.setState({ data }));
  //   console.log(this.state);
  // }


  render() {
    return (
      <div className="GameContainer">
        {this.state.dailygameschedule.gameentry.map((game) => {
          return <GameCard game={game} />
        })}
      </div>
    )
  }
}

export default GameContainer;
