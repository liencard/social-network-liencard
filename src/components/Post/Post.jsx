import React from 'react';
import PropTypes from 'prop-types';

import style from "./Post.module.css";

import { useObserver } from 'mobx-react-lite';
import { Link } from "react-router-dom";

const Post = ({ post }) => {

  return useObserver(() => (
    <>
      <li key={post.description} className={style.post}>
        <Link to={`/detail/${post.id}`}>
          <div className={style.post__header}>
            <img
              className={style.post__avatar}
              src={post.avatar}
              alt="profile icon"
            ></img>
            <div className={style.post__header__wrapper}>
              <p className={style.post__user}>{post.user}</p>
              <p className={style.post__location}>{post.location}</p>
              <p className={style.post__time}>{post.time}</p>
            </div>
          </div>

          <div className={style.post__info}>
            <img
              className={style.post__picture}
              src={post.picture}
              alt="location"
            ></img>
            <p className={style.post__description}>{post.description}</p>
            <p className={style.post__tags}>{post.tags}</p>
          </div>
        </Link>
        <div className={style.post__bottom}>
          <button
            style={{
              backgroundImage: `url(${
                post.like
                  ? 'assets/img/heart-full.svg'
                  : 'assets/img/heart-border.svg'
              })`
            }}
            className={style.post__like}
            onClick={() => {
              post.addLike();
            }}
          >
            {post.like ? 'Liked' : 'Like'}
          </button>
          <button className={style.post_comment}>
            <span className={style.commentAmount}>{post.commentsLength}</span>{' '}Comments
          </button>
        </div>
      </li>
    </>
  ));
};

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;