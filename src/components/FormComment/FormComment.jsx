import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import style from "./FormComment.module.css";

const FormComment = ({ post }) => {

    const [comment, setComment] = useState("");

    const handleSubmitComment = e => {
      post.addComment({user: 'User', comment, time: '1s ago'});
      setComment("");
      e.preventDefault();
    };


  return (
    <form className={style.form} onSubmit={handleSubmitComment}>
      <input className={style.form__input} type="text" id="content" name="content" placeholder="Write a comment"
        value={comment}
        onChange={e => setComment(e.currentTarget.value)} />
      <button className={style.form__button}><img src="../assets/img/send.svg" alt="paper plane send icon"></img></button>
    </form>
  );
};

FormComment.propTypes = {
  post: PropTypes.object.isRequired
};

export default FormComment;
