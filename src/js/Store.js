import Message from './Message';

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

export default Store;
