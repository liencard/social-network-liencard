import React from 'react';

import Header from '../Header/Header';
import CommentList from '../CommentList/CommentList';

import style from './Detail.module.css';

import { useObserver } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { useStores } from "../../hooks";

const Detail = () => {

  const { id } = useParams();
  const { dataStore } = useStores();
  const post = dataStore.getPostById(id);

  return useObserver(() => (
    <>
      <Header title={'Detail'} />

      <li key={id} className={style.post}>
        <div className={style.post__header}>
          <img
            className={style.post__avatar}
            src={`../${post.avatar}`}
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
            src={`../${post.picture}`}
            alt="location"
          ></img>
          <p className={style.post__description}>{post.description}</p>
          <p className={style.post__tags}>{post.tags}</p>
        </div>

        <div className={style.post__bottom}>
          <button
            style={{
              backgroundImage: `url(${
                post.like
                  ? '../assets/img/heart-full.svg'
                  : '../assets/img/heart-border.svg'
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
            <span className={style.commentAmount}>{post.commentsLength}</span>{' '}
            Comments
          </button>
        </div>

        <CommentList post={post} store={dataStore} key={post.id} />
      </li>
    </>
  ));
};

export default Detail;
