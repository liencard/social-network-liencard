import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Store from "./stores/Store";
import Post from "./models/Post";
import Comment from "./models/Comment";

const store = new Store();

const p1 = new Post({
  description:
    'Zon, zee, strand! Morbi nec rutrum magna. Curabitur et malesuada nunc.',
  user: 'Lien Cardoen',
  picture: './assets/img/cyprus.png',
  location: 'Cyprus',
  avatar: './assets/img/cyprus.png',
  time: '6h ago'
});

const p2 = new Post({
  description:
    'Zonsondergang uit Cyprus. Morbi sed nisl quis urna ornare euismod. Suspendisse sed vestibulum massa.',
  user: 'Sarah Van Den Berghe',
  picture: './assets/img/duinen.jpg',
  location: 'Duinkerke',
  avatar: './assets/img/cyprus.png',
  time: '1 hour ago'
});

p1.comments = [
  new Comment({
    user: 'Daan',
    comment: 'Wauw staat ook op mijn travellist!!',
    time: '33min ago'
  }),
  new Comment({
    user: 'Helena',
    comment: 'Oh tof, veel plezier 😛',
    time: '6min ago'
  })
] 

p2.comments = [
  new Comment({
    user: 'Felix',
    comment: 'Wauw staat ook op mijn travellist!!',
    time: '8h ago'
  }),
  new Comment({
    user: 'Lotte',
    comment: 'Amuseer jullie daar ☀',
    time: '2 days ago'
  })
] 

store.seed([p1, p2]);

ReactDOM.render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
