import { observable, action, decorate, configure } from "mobx";
configure({ enforceActions: "observed" });

class DataStore {
  constructor() {
    this.posts = [];
    this.users = [];
  }

  addPost(post) {
    this.posts.push(post);
  }

  addUser(user) {
    this.users.push(user);
  }

  seed(posts) {
    this.posts = posts;
  }

  getPostById = id => this.posts.find(post => post.id === id);

  getPostByLike = () => this.posts.filter(post => post.like === true);
}

decorate(DataStore, {
  posts: observable,
  users: observable,
  addPost: action,
  addUser: action,
  seed: action
});

export default DataStore;
