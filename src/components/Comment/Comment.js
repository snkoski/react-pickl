import React from 'react';
import { connect } from 'react-redux';

import classes from './Comment.module.css';

const formatTimestamp = (timestamp) => {
  const days = timestamp.split('T')[0];
  const time = timestamp.split('T')[1];
  const year = days.split('-')[0];
  const month = parseInt(days.split('-')[1], 10) - 1;
  const day = days.split('-')[2];
  const hour = time.split(':')[0];
  const minute = time.split(':')[1];
  const second = time.split(':')[2].split('+')[0];
  const newDate = new Date(year, month, day, hour, minute, second);

  return newDate.toLocaleString();
};

const Comment = ({ username, comment, handleDeleteComment }) => {
  let deleteButton = null;
  if (username === comment.commentor.username) {
    deleteButton = <button type="button" onClick={() => handleDeleteComment(comment.id)}>Delete</button>;
  }
  // const days = comment.timestamp.split('T')[0];

  return (
    <div className={classes.Comment}>
      <span className={classes.commentor}>{comment.commentor.username}</span>
      <span className={classes.timestamp}>{formatTimestamp(comment.timestamp)}</span>
      <span className={classes.content}>{comment.content}</span>
      {deleteButton}
    </div>
  );
};

const mapStateToProps = (state) => ({
  username: state.auth.username,
});

export default connect(mapStateToProps)(Comment);
