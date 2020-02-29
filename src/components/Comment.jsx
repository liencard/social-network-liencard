import React from 'react';
import PropTypes from 'prop-types';
import { useObserver } from 'mobx-react-lite';

const Comment = ({ comment }) => {
  return useObserver(() => (
    <>
      <li className="comment" key={comment.comment}>
        <p><span className="comment__user">{comment.user}</span> -{' '}<span className="comment__time">{comment.time}</span></p>
        <p className="comment__comment">{comment.comment}</p>
      </li>
    </>
  ));
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default Comment;
