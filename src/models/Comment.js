import { v4 } from 'uuid';

class Comment {
    constructor({ user, comment, time }) {
        if (!user) {
            throw new Error("A comment must have a user");
        }
        if (!comment || comment === "") {
            throw new Error("A comment must have a description");
        }
        this.id = v4();
        this.user = user;
        this.comment = comment;
        this.time = time;
    }
}

export default Comment;
