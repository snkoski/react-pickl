import React from 'react';
import Comment from './Comment';

import classes from './CommentHolder.module.css';

const CommentHolder = props => {
        if (props.comments) {
            return (
                <div className={classes.CommentHolder}>
                    {props.comments.map(comment => {
                        return <Comment key={`comment-${comment.id}`} comment={comment} username={props.username} handleDeleteComment={props.handleDeleteComment}/>
                    })}
                </div>
            )
        } else {
            return null;
        }

}
export default CommentHolder;