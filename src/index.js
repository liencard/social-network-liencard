import './style.css';
import Store from './js/Store';
import Message from './js/Message';
import {autorun} from 'mobx';

const renderUnread = ({unreadLength}) => {
  document.querySelector('.unread').textContent = unreadLength > 0 ? `${unreadLength} unread message${unreadLength > 1 ? 's' : ''}` : '';
};

const renderMessages = store => {
  const $list = document.querySelector('.list');
  $list.innerHTML = '';
  store.messages.forEach(message => {
    $list.appendChild(createMessage(message, store));
  });
};

const createMessage = (message, store) => {
  const $li = document.createElement('li');
  $li.classList.add('bubble',
    message.unread ? 'bubble--unread' : 'bubble--read',
    message.user === 1 ? 'bubble--right' : 'bubble--left');
  $li.textContent = message.content;
  $li.addEventListener('click', () => setAsRead(message, store));
  return $li;
};

const setAsRead = (message, store) => {
  message.unread = false;
};

const handleFormSubmit = (e, store) => {
  e.preventDefault();
  const content = e.currentTarget.content.value;
  if (content) {
    store.addMessage(content);
    e.currentTarget.reset();
  }
};

const init = () => {
  const store = new Store();
  autorun(() => {
    renderMessages(store);
    renderUnread(store);
  });

  store.messages.push(new Message({content: 'Hey', user: 2}));
  store.messages.push(new Message({content: 'Joow', user: 1}));
  store.messages.push(new Message({content: 'Hoe is het?', user: 2, unread: true}));
  store.messages.push(new Message({content: 'Lang niet gezien', user: 2, unread: true}));

  window.store = store;

  const $form = document.querySelector('form');
  $form.addEventListener('submit', e => handleFormSubmit(e, store));
};

init();
