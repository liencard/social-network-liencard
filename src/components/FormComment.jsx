import React from 'react';
import PropTypes from 'prop-types';
import { useObserver } from 'mobx-react-lite';

const FormComment = ({ post }) => {

    const pushComment = (post, e) => {
      post.addComment(post.commentInput.user, post.commentInput.comment,post.commentInput.time);
      post.setComment(post.commentInput.user, '');
      e.preventDefault();
    };

  return useObserver(() => (
      <form className="form" onSubmit={e => pushComment(post, e)}>
        <input className="form__input" type="text" id="content" name="content" placeholder="Write a comment" value={post.commentInput.comment} onChange={e => post.setComment('User', e.currentTarget.value)} />
        <button className="form__button">post</button>
    </form>

  ));
};

FormComment.propTypes = {
  post: PropTypes.object.isRequired
};

export default FormComment;
