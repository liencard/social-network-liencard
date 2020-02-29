import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Store from "./stores/Store";
import Post from "./models/Post";

const store = new Store();

store.seed([
  new Post({
    description:
      'Zon, zee, strand! Morbi nec rutrum magna. Curabitur et malesuada nunc.',
    user: 'Lien Cardoen',
    picture: './assets/img/cyprus.png',
    location: 'Cyprus',
    avatar: './assets/img/cyprus.png',
    time: '6h ago'
  }),
  new Post({
    description:
      'Zonsondergang uit Cyprus. Morbi sed nisl quis urna ornare euismod. Suspendisse sed vestibulum massa.',
    user: 'Sarah Van Den Berghe',
    picture: './assets/img/duinen.jpg',
    location: 'Duinkerke',
    avatar: './assets/img/cyprus.png',
    time: '1 hour ago'
  })
]);

store.posts[0].addComment('Daan','Wauw staat ook op mijn travellist!!', '33min ago');
store.posts[0].addComment('Helena', 'Oh tof, veel plezier 😛', '6min ago');

store.posts[1].addComment('Felix','Wauw staat ook op mijn travellist!!', '8h ago');
store.posts[1].addComment('Lotte', 'Amuseer jullie daar ☀', '2 days ago');

ReactDOM.render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
