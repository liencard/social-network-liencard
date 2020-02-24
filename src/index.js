import React from "react";
import ReactDOM from "react-dom";

import Store from "./js/Store";
//import Post from './js/Post';

import { useObserver } from "mobx-react-lite";
import "./style.css";

const store = new Store();
store.seed();

const App = () => {
  console.log("render");

  return useObserver(() => (
    <>
      <ul className="posts">
        {store.posts.map(post => (
          <li key={post.description} className="post">
            <div className="post__header">
              <img
                className="post__avatar"
                src={post.avatar}
                alt="profile icon"
              ></img>
              <div className="post__header__wrapper">
                <p className="post__user">{post.user}</p>
                <p className="post__location">{post.location}</p>
                <p className="post__time">{post.time}</p>
              </div>
            </div>
            <div className="post__info">
              <img
                className="post__picture"
                src={post.picture}
                alt="location"
              ></img>
              <p className="post__description">{post.description}</p>
            </div>
            <div className="post__bottom">
              <button className="post__like">35 Likes</button>
              <button className="post_comment">12 Comments</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  ));
};

ReactDOM.render(<App />, document.getElementById("root"));
