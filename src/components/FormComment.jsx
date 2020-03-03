import React, { useState }  from 'react';
//import Comment from "../models/Comment";
import PropTypes from 'prop-types';
import { useObserver } from 'mobx-react-lite';

const FormComment = ({ post }) => {

    const [comment, setComment] = useState("");

    const handleSubmitComment = e => {
      post.addComment({user: 'User', comment, time: '1s ago'});
      setComment("");
      e.preventDefault();
    };


  return useObserver(() => (
    <form className="form" onSubmit={handleSubmitComment}>
      <input className="form__input" type="text" id="content" name="content" placeholder="Write a comment"
        value={comment}
        onChange={e => setComment(e.currentTarget.value)} />
      <button className="form__button">post</button>
    </form>
  ));
};

FormComment.propTypes = {
  post: PropTypes.object.isRequired
};

export default FormComment;
