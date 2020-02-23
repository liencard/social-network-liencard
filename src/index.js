import React from 'react';
import ReactDOM from 'react-dom';

import Store from './js/Store';
import Post from './js/Post';

import {autorun} from 'mobx';
//import { useObserver } from 'mobx-react-lite';

import './style.css';


const renderPosts = posts => {
  const $list = document.querySelector('.posts');
  $list.innerHTML = '';

  posts.forEach(post => {
    $list.appendChild(createPost(post));
  });
};

const createPost = post => {
  const $li = document.createElement('li');
  $li.classList.add('post');

  $li.innerHTML = post.createHTML();
  $li.addEventListener('click', () => toggleLike(post));
  return $li;
};


const toggleLike = post => {
  if (post.like === true) {
    post.addLike(false);
  } else {
    post.addLike(true);
  }
};

const init = () => {
  const store = new Store();

  autorun(() => {
    renderPosts(store.posts);
  });

  store.seed([
    new Post({
      description: 'Zon, zee, strand',
      user: 1,
      picture: 'image1',
      location: 'Duinkerke'}),
    new Post({
      description: 'Zondsondergang uit Cyprus',
      user: 1,
      picture: 'image2',
      location: 'Duinkerke'
    }),
    new Post({
      description: 'Prachtig uitzicht oo de bergen',
      user: 1,
      picture: 'image3',
      location: 'Cyprus'
    })
  ]);

  // store.seed([
  //   store.posts[0].addComment(1, 'Leuke foto'),
  //   store.posts[0].addComment(1, 'Wauw staat ook op mijn travellist!!!!!! <3')
  // ]);

  window.store = store;
  console.log(store.posts);

};

init();
