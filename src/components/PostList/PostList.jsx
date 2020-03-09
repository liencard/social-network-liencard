import React from 'react';
import Post from '../Post/Post';
import FormPost from '../FormPost/FormPost';
import { useObserver } from 'mobx-react-lite';
import { useStores } from "../../hooks";
import style from "./PostList.module.css";

const PostList = () => {

  const { dataStore } = useStores();

    return useObserver(() => (
      <section className="container">
        <ul className={style.posts}>
          {dataStore.posts.map(post => (
            <Post post={post} key={post.id} />
          ))}
        </ul>
        <FormPost />
      </section>
    ));
};

export default PostList;
