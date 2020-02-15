import Message from './Message';
import {decorate, observable, action, computed} from 'mobx';

class Store {

  constructor() {
    this.messages = [];
  }

  addMessage(content) {
    this.messages.push(new Message({content, user: 1}));
  }

  get unreadLength() {
    return this.messages.filter(message => message.unread).length;
  }
}

decorate(Store, {
  messages: observable,
  addMessage: action,
  unreadLength: computed
});

export default Store;
