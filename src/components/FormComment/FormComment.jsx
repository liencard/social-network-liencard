import React, { useState }  from 'react';
import PropTypes from 'prop-types';
import style from "./FormComment.module.css";
import { useStores } from '../../hooks';

const FormComment = ({ post }) => {

    const { uiStore } = useStores();
    const [comment, setComment] = useState("");

    const handleSubmitComment = e => {
      e.preventDefault();

      if (comment !== '') {
        post.addComment({ user: uiStore.currentUser, comment, time: '1s ago'});
        setComment("");
      }
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
