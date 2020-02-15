import {decorate, observable, action} from 'mobx';

class Message {

  constructor({content, user, unread = false}) {
    this.content = content;
    this.user = user;
    this.unread = unread;
  }

  setUnread(value) {
    this.unread = value;
  }

}

decorate(Message, {
  unread: observable,
  setUnread: action
});

export default Message;
