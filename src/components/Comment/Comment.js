import React from 'react';
import { connect } from 'react-redux';

import classes from './Comment.module.css';

const formatTimestamp = timestamp => {
    let days = timestamp.split('T')[0];
    let time = timestamp.split('T')[1];
    let year = days.split('-')[0];
    let month = parseInt(days.split('-')[1]) - 1;
    let day = days.split('-')[2];
    let hour = time.split(':')[0];
    let minute = time.split(':')[1];
    let second = time.split(':')[2].split('+')[0]
    let newDate = new Date ( year, month, day, hour, minute, second )
    
    return newDate.toLocaleString()
}

const Comment = props => {
    
    let deleteButton = null;
    if (props.username === props.comment.commentor.username) {
        deleteButton = <button type='button' onClick={() => props.handleDeleteComment(props.comment.id)}>Delete</button>
    }
    let days = props.comment.timestamp.split('T')[0];

    return (
        <div className={classes.Comment}>
            <span className={classes.commentor}>{props.comment.commentor.username}</span>
            <span className={classes.timestamp}>{formatTimestamp(props.comment.timestamp)}</span>
            <span className={classes.content}>{props.comment.content}</span>
            {deleteButton}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        username: state.auth.username
    }
}

export default connect(mapStateToProps)(Comment);