import React from 'react';
import PropTypes from 'prop-types';
import CommentList from '../CommentList/CommentList';

import { useObserver } from 'mobx-react-lite';
import { Link } from "react-router-dom";

const Post = ({ post }) => {

  return useObserver(() => (
    <>
      <Link to={`/detail/${post.id}`}>
      <li key={post.description} className="post">
        <div className="post__header">
          <img
            className="post__avatar"
            src={post.avatar}
            alt="profile icon"
          ></img>
          <div className="post__header__wrapper">
            <p className="post__user">{post.user}</p>
            <p className="post__location">{post.location}</p>
            <p className="post__time">{post.time}</p>
          </div>
        </div>

        <div className="post__info">
          <img
            className="post__picture"
            src={post.picture}
            alt="location"
          ></img>
          <p className="post__description">{post.description}</p>
        </div>

        <div className="post__bottom">
          <button
            style={{backgroundImage: `url(${ post.like ? 'assets/img/heart-full.svg' : 'assets/img/heart-border.svg'})`}}
            className={`post__like ${ post.like ? 'post--liked' : 'post--unlike'}`}
            onClick={() => { post.addLike();}}
            >{post.like ? 'Liked' : 'Like'}
          </button>
          <button className="post_comment">
            <span className="commentAmount">{post.commentsLength}</span>{' '} Comments
          </button>
        </div>

        <CommentList post={post} key={post.id}/>

      </li>
      </Link>
    </>
  ));
};

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;