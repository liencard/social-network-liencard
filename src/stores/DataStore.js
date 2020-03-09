import { observable, action, decorate, configure } from "mobx";
configure({ enforceActions: "observed" });

class DataStore {
  constructor() {
    this.posts = [];
  }

  addPost(post) {
    this.posts.push(post);
  }

  seed(posts) {
    this.posts = posts;
  }

  getPostById = id => this.posts.find(post => post.id === id);

}

decorate(DataStore, {
  posts: observable,
  addPost: action,
  seed: action
});

export default DataStore;
