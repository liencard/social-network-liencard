import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import FormPost from './FormPost';
import { useObserver } from 'mobx-react-lite';

const Posts = ({ store }) => {

    return useObserver(() => (
      <section className="container">
        <ul className="posts">
          {store.posts.map(post => (
            <Post post={post} store={store} key={post.id} />
          ))}
        </ul>
        <FormPost store={store}/>
      </section>
    ));
};

Posts.propTypes = {
  store: PropTypes.object.isRequired
};

export default Posts;
