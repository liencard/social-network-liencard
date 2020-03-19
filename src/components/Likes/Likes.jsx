import React from 'react';

import Post from '../Post/Post';
import Header from '../Header/Header';

import { useObserver } from 'mobx-react-lite';
import { useStores } from '../../hooks';

import style from './Likes.module.css';

const Likes = () => {

    const { dataStore } = useStores();
    const posts = dataStore.getPostByLike();
    console.log(dataStore.getPostByLike());

    return useObserver(() => (
      <>
        <Header title={'Likes'} />
          <ul className={style.list}>
          {posts.length > 0 ? 
            (
              posts.map(post => (
              <Post post={post} key={post.id} />
                  ))
              )
            : 'no likes'}
          </ul> 
      </>
    ));
};

export default Likes;
