import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import FormComment from './FormComment';
import { useObserver } from 'mobx-react-lite';

const Comments = ({ post, store }) => {
  return useObserver(() => (
    <>
      <div className="comments">
        <ul className="comments__list">
          
          {post.comments?
            (
              post.comments.map(comment => (
                <Comment comment={comment} key={comment.id} />
              ))
            )
           : 'no comments'}


          {/* {post.comments.map(comment => (
            <Comment comment={comment} key={comment.id}/>
          ))} */}
        </ul>
        <FormComment post={post}/>
      </div>
    </>
  ));
};

Comments.propTypes = {
  post: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Comments;
