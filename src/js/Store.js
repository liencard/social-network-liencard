import Post from "./Post";
import { observable, action, decorate, configure } from "mobx";
configure({ enforceActions: "observed" });

class Store {
  constructor() {
    this.posts = [];
  }

  addPost(post) {
    //this.posts.push(new Post({ description, user, picture, location }));
    this.posts.push(post);
  }

  seed() {
    this.addPost(
      new Post({
        description: "Zon, zee, strand! Morbi nec rutrum magna. Curabitur et malesuada nunc.",
        user: "Lien Cardoen",
        picture: "cyprus.png",
        location: "Duinkerke",
        avatar: "cyprus.png",
        time: "6h ago"
      })
    );
    this.addPost(
      new Post({
        description: "Zonsondergang uit Cyprus. Morbi sed nisl quis urna ornare euismod. Suspendisse sed vestibulum massa.",
        user: "Sarah Vanden Berghe",
        picture: "duinen.jpg",
        location: "Cyprus",
        avatar: "cyprus.png",
        time: "1 day ago"
      })
    );
  }
}

decorate(Store, {
  posts: observable,
  addPost: action,
  seed: action
});

export default Store;
