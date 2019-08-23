import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postGameComment } from '../../actions/comments';

class CommentInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

    onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
      const { user, game_id, addComment } = this.props;
      const { content } = this.state;
      e.preventDefault();
      const comment = {
        user: user.userId,
        game: game_id,
        content,
      };
      addComment(comment);
    }

    render() {
      const { content } = this.state;
      return (
        <div>
          <form noValidate onSubmit={this.onSubmit}>
            <input
              type="text"
              name="content"
              placeholder="Enter comment"
              value={content}
              onChange={this.onChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
}

const mapStateToProps = (state) => ({
  user: state.auth,
  comments: state.comments,
});

const mapDispatchToProps = (dispatch) => ({
  addComment: (comment) => dispatch(postGameComment(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentInput);
