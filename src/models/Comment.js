import { v4 } from 'uuid';

class Comment {
    constructor({ user, comment, time }) {
        this.id = v4();
        this.user = user;
        this.comment = comment;
        this.time = time;
    }
}

export default Comment;
