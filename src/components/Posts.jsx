import React from 'react';
import Post from './Post';
import FormPost from './FormPost';
import { useObserver } from 'mobx-react-lite';
import { useStores } from "../hooks";

const Posts = () => {

  const { dataStore } = useStores();

    return useObserver(() => (
      <section className="container">
        <ul className="posts">
          {dataStore.posts.map(post => (
            <Post post={post} key={post.id} />
          ))}
        </ul>
        <FormPost />
      </section>
    ));
};

export default Posts;
