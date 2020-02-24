import Post from "./Post";
import { observable, action, decorate, configure } from "mobx";
configure({ enforceActions: "observed" });

class Store {
  constructor() {
    this.posts = [];
  }

  addPost(post) {
    this.posts.push(post);
  }

  seed(posts) {
    this.posts = posts;
  }

}

decorate(Store, {
  posts: observable,
  addPost: action,
  seed: action
});

export default Store;
