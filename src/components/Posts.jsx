import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import { useObserver } from 'mobx-react-lite';

const Posts = ({ store }) => {

    return useObserver(() => (
      <ul className="posts">
        {store.posts.map(post => (
          <Post post={post} store={store} key={post.id} />
        ))}
      </ul>
    ));
};

Posts.propTypes = {
  store: PropTypes.object.isRequired
};

export default Posts;
