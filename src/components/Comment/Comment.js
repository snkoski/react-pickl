import React from 'react';
import { connect } from 'react-redux';
import { patchDeleteComment } from '../../actions/comments';

import classes from './Comment.module.css';

const formatTimestamp = timestamp => {
    let days = timestamp.split('T')[0];
    let time = timestamp.split('T')[1];
    let year = days.split('-')[0];
    let month = days.split('-')[1];
    let day = days.split('-')[2];
    let hour = time.split(':')[0];
    let minute = time.split(':')[1];
    let second = time.split(':')[2].split('+')[0]
    let newDate = new Date ( year, month, day, hour, minute, second )

    return newDate.toLocaleString()
}

const Comment = props => {
    
    console.log("COMMENT", props)

    if (props.username === props.comment.commentor.username) {
        return (
            <div className={classes.Comment}>
                <span className={classes.commentor}>{props.comment.commentor.username}</span>
                <span className={classes.timestamp}>{formatTimestamp(props.comment.timestamp)}</span>
                <span className={classes.content}>{props.comment.content}</span>
                {/* <button>Edit</button> */}
                <button type='button' onClick={() => props.handleDeleteComment(props.comment.id)}>Delete</button>
            </div>
        )
    } else {
        return (
            <div className={classes.Comment}>
                <span className={classes.commentor}>{props.comment.commentor.username}</span>
                <span className={classes.timestamp}>{formatTimestamp(props.comment.timestamp)}</span>
                <span className={classes.content}>{props.comment.content}</span>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Comment);