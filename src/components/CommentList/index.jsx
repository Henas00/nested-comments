import React from "react";
import classnames from "classnames";
import CommentBox from "../CommentBox";
import "./_styles.scss";
import EmptyList from "../EmptyList";

const CommentList = ({ comments }) => {
  const renderEl = (el) => {
    return (
      <>
        {el.map(element => {
          return (
            <div key={Math.random()}>
              <CommentBox key={Math.random()} comment={element} />
              {element.children && element.children.length > 0 ? renderEl(element.children) : null}
            </div>
          )
        }
        )}
      </>
    )
  }

  return (
    <div className="root-list">
      {comments ?
        comments.length && comments.map((comment, idx) => {
          return (
            <div
              data-testid="comment-wrapper"
              className={classnames({
                // Should be true for root comment
                "root-comment": comment.root,
              })}
              key={comment.id}
            >
              <CommentBox comment={comment} key={Math.random()} />
              {
                comment.children && comment.children.length > 0 ? renderEl(comment.children) : null
              }
            </div>
          )
        }) :
        <EmptyList />
      }
    </div>
  );
};

export default CommentList;
