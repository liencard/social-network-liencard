import Message from './Message';
import {decorate, observable, action, computed, configure} from 'mobx';

configure({enforceActions: 'observed'});
class Store {

  constructor() {
    this.messages = [];
  }

  seed(data) {
    //this.messages = data;
    this.messages.push(...data);
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
  unreadLength: computed,
  seed: action
});

export default Store;
