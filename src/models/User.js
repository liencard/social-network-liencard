import { v4 } from "uuid";

class User {
    constructor({ id = v4(), name, store, avatar = "" }) {
        this.id = id;
        this.name = name;
        this.posts = [];
        this.avatar = avatar;
        this.store = store;

        if (!avatar) {
            this.avatar = './assets/img/avatar.png';
        }

        if (!store) {
            throw new Error("No store detected");
        }

        this.store.addUser(this);
    }

    linkPost(post) {
        !this.posts.includes(post) && this.posts.push(post);
    }
}

export default User;
