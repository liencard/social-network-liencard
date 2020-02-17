import Post from './Post';
import {observable, action, decorate, configure} from 'mobx';
configure({enforceActions: 'observed'});

class Store {

  constructor() {
    this.posts = [];
  }


  addPost(description, user, picture, location) {
    this.posts.push(new Post({description, user, picture, location}));
  }


  seed(data) {
    this.posts.push(...data);
  }

}

decorate(Store, {
  posts: observable,
  addPost: action,
  seed: action,
});

export default Store;
