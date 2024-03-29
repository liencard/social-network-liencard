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
              src={post.user.avatar}
              alt="profile icon"
            ></img>
            <div className={style.post__header__wrapper}>
              <p className={style.post__user}>{post.user.name}</p>
              <p className={style.post__location}><img src="../assets/img/pin.svg" alt="location icon"></img>{post.location}</p>
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
            {post.tags ?
            <ul className={style.post__tags}>
              {post.tags
                ? post.tags.map(tag => (
                    <li className={style.tag} key={tag}>
                      #{tag}
                    </li>
                  ))
                : ''}
            </ul> : ''}
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
            className={`${style.post__like} ${post.like ? style.liked : style.unlike}`}
            onClick={() => {
              post.addLike();
            }}
          >
            {post.like ? 'Liked' : 'Like'}
          </button>
          <button className={style.post__comment}>
            <span className={style.commentAmount}>{post.commentsLength}</span>{' '}
            Comments
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