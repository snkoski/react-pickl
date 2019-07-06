import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postGameComment } from '../../actions/comments';

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
            user: this.props.user.userId, 
            game: this.props.game_id, 
            content: this.state.content
        }
        this.props.addComment(comment)
    }

    render() {
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
        user: state.auth,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addComment: (comment) => dispatch(postGameComment(comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentInput);