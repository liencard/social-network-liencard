import { observable, action, computed, decorate, configure } from "mobx";
import { v4 } from 'uuid';
import Comment from "./Comment";

configure({ enforceActions: "observed" });

class Post {
  constructor({ description, user, picture, location, tags, avatar, time}) {
    this.id = v4();
    this.description = description;
    this.user = user;
    this.picture = picture;
    this.location = location;
    this.tags = tags;
    this.avatar = avatar;
    this.time = time;
    this.like = false;
    
    this.comments = [];
    this.commentInput = '';
  }

  addLike() {
    this.like = !this.like;
  }

  setComment(comment) {
    this.commentInput = comment;
  }

  addComment(comment) {
    this.comments.push(new Comment(comment)); // nog timestamp aan linken
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
