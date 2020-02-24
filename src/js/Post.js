import { observable, action, decorate, configure } from "mobx";
configure({ enforceActions: "observed" });

class Post {
  constructor({
    description,
    user,
    picture,
    location,
    avatar,
    time,
    like = false
  }) {
    this.description = description;
    this.user = user;
    this.picture = picture;
    this.location = location;
    this.avatar = avatar;
    this.time = time;
    this.like = like;
    this.comments = [];
  }

  createHTML() {
    return `<li class="post">
        <button class="post__like">Like</button>
        <div class="post__info">
          <p class="post__description">${this.description}</p>
          <p class="post__user">${this.user}</p>
          <img scr="image1" alt="lalala">
          <p class="post__location">${this.location}</p>
        </div>
      </li>`;
  }

  // like function()
  addLike(value) {
    this.like = value;
    console.log(this.like);
  }

  addComment(user, comment) {
    this.comments.push({ user: user, comment: comment, time: "8h ago" }); // nog timestamp aan linken
  }
}

decorate(Post, {
  like: observable,
  comments: observable,
  createHTML: action,
  addLike: action,
  addComment: action
});

export default Post;
