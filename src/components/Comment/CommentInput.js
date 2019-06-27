import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postComment } from '../../actions/comments';

class CommentInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = e => {
        e.preventDefault()

        const comment = {
            user: this.props.user.id, 
            game: this.props.game_id, 
            content: this.state.content
        }

        this.props.postComment(comment)
        
    }

    render() {
        // console.log("COMMENT INPUT", this.props)
        return (
            <div>
                <form noValidate onSubmit={this.onSubmit}>
                    <input type='text'
                        name='content'
                        placeholder='Enter comment'
                        value={this.state.content}
                        onChange={this.onChange}>
                    </input>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        comments: state.comments
    }
}

export default connect(mapStateToProps, { postComment })(CommentInput);