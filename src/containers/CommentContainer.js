import React, { Component } from 'react';
import { connect } from 'react-redux';

import CommentHolder from '../components/Comment/CommentHolder';
import CommentInput from '../components/Comment/CommentInput';
import { fetchGameComments, patchDeleteGameComment } from '../actions/comments';


class CommentContainer extends Component {

    componentDidMount() {
        this.props.getComments(this.props.game_id)
    }

    handleDeleteComment = id => {
        this.props.deleteComment(id)
    }

    renderCommentInput = () => {
        return (this.props.user.userId) ? <CommentInput game_id={this.props.game_id}/> : null;
    }

    render() {
        return (
            <div>
                {this.renderCommentInput()}
                <CommentHolder comments={this.props.comments} username={this.props.user.username} handleDeleteComment={this.handleDeleteComment}/>
            </div>
        )
    }
};
const mapStateToProps = state => {
    return {
        comments: state.comments.comments,
        user: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getComments: (id) => dispatch(fetchGameComments(id)), 
        deleteComment: (id) => dispatch(patchDeleteGameComment(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);