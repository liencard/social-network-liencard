class Message {

  constructor({content, user, unread = false}) {
    this.content = content;
    this.user = user;
    this.unread = unread;
  }
}

export default Message;
