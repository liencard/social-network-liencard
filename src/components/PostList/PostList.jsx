import React from 'react';
import Post from '../Post/Post';
import Header from '../Header/Header';

import { useObserver } from 'mobx-react-lite';
import { useStores } from "../../hooks";
import style from "./PostList.module.css";

const PostList = () => {

  const { dataStore } = useStores();

    return useObserver(() => (
      <>
        <Header title={"Travel App"}/>
        <section className={style.container}>
          <ul className={style.posts}>
            {dataStore.posts.map(post => (
              <Post post={post} key={post.id} />
            ))}
          </ul>
      </section>
      </>
    ));
};

export default PostList;
