import { observable, action, computed, decorate, configure } from "mobx";
import Comment from "./Comment";

configure({ enforceActions: "observed" });

class Post {
  constructor({ id, description, user, picture, location, tags, time}) {
    if (!user) {
      throw new Error("A post must have a user");
    }
    if (!description || description === "") {
      throw new Error("A post must have a description");
    }
    if (!picture) {
      throw new Error("A post must have a picture");
    }
    if (!location) {
      throw new Error("A post must have a location");
    }
    
    this.id = id;
    this.description = description;
    this.user = user;
    this.picture = picture;
    this.location = location;
    this.tags = tags;
    this.time = time;
    this.like = false;
    this.comments = [];
  }

  addLike() {
    this.like = !this.like;
  }

  addComment(comment) {
    this.comments.push(new Comment(comment));
  }

  get commentsLength() {
    return this.comments.length;
  }
}

decorate(Post, {
  like: observable,
  comments: observable,
  addLike: action,
  addComment: action,
  commentsLength: computed
});

export default Post;
