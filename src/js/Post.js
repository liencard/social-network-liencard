import {observable, action, decorate, configure} from 'mobx';
configure({enforceActions: 'observed'});

class Post {

  constructor({description, user, picture, location, like = false}) {
    this.description = description;
    this.user = user;
    this.picture = picture;
    this.location = location;
    this.like = like;
    this.comments = [];
  }

  // like function()
  addLike(value) {
    this.like = value;
    console.log(this.like);
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
}

decorate(Post, {
  like: observable,
  addLike: action,
  createHTML: action
});

export default Post;
