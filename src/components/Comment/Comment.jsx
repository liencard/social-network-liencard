import React from 'react';
import PropTypes from 'prop-types';
import { useObserver } from 'mobx-react-lite';
import style from "./Comment.module.css";

const Comment = ({ comment }) => {
  return useObserver(() => (
    <>
      <li className={style.comment} key={comment.id}>
        <p><span className={style.comment__user}>{comment.user}</span> -{' '}<span className={style.comment__time}>{comment.time}</span></p>
        <p className={style.comment__comment}>{comment.comment}</p>
      </li>
    </>
  ));
};

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};

export default Comment;
