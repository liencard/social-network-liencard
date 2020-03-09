import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment';
import FormComment from '../FormComment/FormComment';
import { useObserver } from 'mobx-react-lite';

const CommentList = ({ post }) => {
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

        </ul>
        <FormComment post={post}/>
      </div>
    </>
  ));
};

CommentList.propTypes = {
  post: PropTypes.object.isRequired
};

export default CommentList;
