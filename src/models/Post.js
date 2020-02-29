import { observable, action, computed, decorate, configure } from "mobx";
import { v4 } from 'uuid';

configure({ enforceActions: "observed" });

class Post {
  constructor({ description, user, picture, location, avatar, time}) {
    this.id = v4();
    this.description = description;
    this.user = user;
    this.picture = picture;
    this.location = location;
    this.avatar = avatar;
    this.time = time;
    this.like = false;
    this.comments = [];
    this.commentInput = { user: 'user', comment: '', time: '3h'};
  }

  addLike() {
    this.like = !this.like;
  }

  setComment(user, comment, time) {
    this.commentInput = { user: user, comment: comment, time: time};
  }

  addComment(user, comment, time) {
    this.comments.push({ user: user, comment: comment, time: time}); // nog timestamp aan linken
  }

  get commentsLength() {
    return this.comments.length;
  }
}

decorate(Post, {
  like: observable,
  comments: observable,
  commentInput: observable,
  setComment: action,
  addLike: action,
  addComment: action,
  commentsLength: computed
});

export default Post;
