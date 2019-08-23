import React from 'react';
import Comment from './Comment';

import classes from './CommentHolder.module.css';

const CommentHolder = ({ comments, username, handleDeleteComment }) => {
  if (comments) {
    return (
      <div className={classes.CommentHolder}>
        {comments.map((comment) => <Comment key={`comment-${comment.id}`} comment={comment} username={username} handleDeleteComment={handleDeleteComment} />)}
      </div>
    );
  }
  return null;
};
export default CommentHolder;
