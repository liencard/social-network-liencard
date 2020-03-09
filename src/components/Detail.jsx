import React from 'react';
import BackLink from './BackLink';

import Comments from './Comments';

import { useObserver } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { useStores } from "../hooks";

const Detail = () => {

  const { id } = useParams();
  const { dataStore } = useStores();
  const post = dataStore.getPostById(id);

  return useObserver(() => (
    <>
      <BackLink />

      <li key={id} className="post">
        <div className="post__header">
          <img
            className="post__avatar"
            src={`../${post.avatar}`}
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
            src={`../${post.picture}`}
            alt="location"
          ></img>
          <p className="post__description">{post.description}</p>
        </div>

        <div className="post__bottom">
          <button
            style={{ backgroundImage: `url(${post.like ? 'assets/img/heart-full.svg' : 'assets/img/heart-border.svg'})` }}
            className={`post__like ${post.like ? 'post--liked' : 'post--unlike'}`}
            onClick={() => { post.addLike(); }}
          >{post.like ? 'Liked' : 'Like'}
          </button>
          <button className="post_comment">
            <span className="commentAmount">{post.commentsLength}</span>{' '} Comments
          </button>
        </div>

        <Comments post={post} store={dataStore} key={post.id} />

      </li>
    </>
  ));
};

export default Detail;
