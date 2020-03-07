import React from 'react';
import Post from './Post';
import FormPost from './FormPost';
import { useObserver } from 'mobx-react-lite';
import { useStores } from "../hooks";

const Posts = () => {

  const { store } = useStores();

    return useObserver(() => (
      <section className="container">
        <ul className="posts">
          {store.posts.map(post => (
            <Post post={post} key={post.id} />
          ))}
        </ul>
        <FormPost />
      </section>
    ));
};

export default Posts;
