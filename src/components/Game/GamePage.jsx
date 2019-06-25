import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchGameComments } from '../../actions/comments';


class GamePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

      componentDidMount() {
          this.props.fetchGameComments(this.props.location.state.game_id)
      }
    backButton = (e) => {
        console.log(e)
        this.props.history.push('/')
    }
    commentHolder() {
        if (this.props.comments.data.length) {
           return(
           <div>
            <h1>THIS IS A PLACE HOLDER FOR THE COMMENT CONTAINER</h1>
            <ul>
                {this.props.comments.data.map(comment => {
                    console.log("IN COMMENT MAP", comment)
                    return <li>{comment.content}</li>
                })
                }
            </ul>
           </div>)
        } else {
            return (<h1>no</h1>)
        }
    }
    render() {
        console.log("GAME PAGE", this.props.comments.data)
        const { homeTeam, awayTeam } = this.props.location.state
        return (
            <div>
                <h1><Link to='/'>Back to games</Link></h1>
                <button onClick={this.backButton}>backButton</button>
                <h1>THIS WILL BE THE GAME PAGE</h1>
                <h2>{homeTeam.name} VS {awayTeam.name}</h2>
                {this.commentHolder()}
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps, { fetchGameComments })(GamePage);