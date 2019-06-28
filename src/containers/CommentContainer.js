import React, { Component } from 'react';
import { connect } from 'react-redux';

import CommentHolder from '../components/Comment/CommentHolder';
import CommentInput from '../components/Comment/CommentInput';
import { fetchGameComments, patchDeleteComment } from '../actions/comments';


class CommentContainer extends Component {

    componentDidMount() {
        this.props.fetchGameComments(this.props.game_id)
    }

    handleDeleteComment = id => {
        console.log("CLICKED", id)
        this.props.patchDeleteComment(id)
    }

    renderCommentInput = () => {
        return (this.props.user.id) ? <CommentInput game_id={this.props.game_id}/> : null;
    }

    render() {
        console.log("COMMENT CONTAINER", this.props)
        return (
            <div>
                {this.renderCommentInput()}
                <CommentHolder comments={this.props.comments.data} username={this.props.user.username} handleDeleteComment={this.handleDeleteComment}/>
            </div>
        )
    }
};
const mapStateToProps = state => {
    return {
        comments: state.comments,
        user: state.user
    }
}

export default connect(mapStateToProps, { fetchGameComments, patchDeleteComment })(CommentContainer);