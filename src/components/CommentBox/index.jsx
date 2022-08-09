import React from "react";
import "./_styles.scss";

const CommentBox = ({ comment }) => {
  const styles = {
    level0: '0',
    level1: '16px',
    level2: '32px'
  }
  return (
       <div style={{ marginLeft: (comment.level === 0 && styles.level0) || (comment.level === 1 && styles.level1) || (comment.level === 2 && styles.level2) }} data-testid={comment.id} className="comment-box">
        <p className="comment-box__user">
          {comment.user.firstName} {comment.user.lastName}
        </p>
        <p className="comment-box__description">{comment.info.description}</p>
      </div>
  );
};

export default CommentBox;
