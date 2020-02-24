import React from "react";
import ReactDOM from "react-dom";

import Store from "./js/Store";
import Post from './js/Post';

import { useObserver } from "mobx-react-lite";
import "./style.css";

const store = new Store();

//const post1 = new Post({ description: "Zon, zee, strand! Morbi nec rutrum magna. Curabitur et malesuada nunc.", user: "Lien Cardoen", picture: "cyprus.png", location: "Cyprus", avatar: "cyprus.png", time: "6h ago"});
//post1.addComment('Lien', 'test');
//post1.addComment('Sarah', 'test2');

//const post2 = new Post({ description: "Zonsondergang uit Cyprus. Morbi sed nisl quis urna ornare euismod. Suspendisse sed vestibulum massa.", user: "Sarah Van Den Berghe", picture: "duinen.jpg", location: "Duinkerke", avatar: "cyprus.png", time: "1 hour ago" });

store.seed([
  new Post({ description: "Zon, zee, strand! Morbi nec rutrum magna. Curabitur et malesuada nunc.", user: "Lien Cardoen", picture: "cyprus.png", location: "Cyprus", avatar: "cyprus.png", time: "6h ago" }),
  new Post({ description: "Zonsondergang uit Cyprus. Morbi sed nisl quis urna ornare euismod. Suspendisse sed vestibulum massa.", user: "Sarah Van Den Berghe", picture: "duinen.jpg", location: "Duinkerke", avatar: "cyprus.png", time: "1 hour ago" })
]);

store.posts[0].addComment('Lien', 'test', '33min ago');
store.posts[0].addComment('Sarah', 'test2', '6min ago');


const pushComment = (post,e) => {
  post.addComment(post.activeInput.user, post.activeInput.comment, post.activeInput.time);
  post.setComment(post.activeInput.user, '');
  e.preventDefault();
}

// const handleLike = () => {
//   post.addLike();
// };

const App = () => {

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
              {/* <button className={`post__like ${post.like ? "post--liked" : ""}`} onClick={handleLike()}>Like</button> */}
              <button className={`post__like ${post.like ? "post--liked" : ""}`} onClick={() => { post.addLike(); }}>Like</button>
              <button className="post_comment">12 Comments</button>
            </div>

            <div className="comments">
              <ul className="comments__list">
                {post.comments.map(comment => (
                  <li key={comment.comment}>
                    <p>{comment.user} - {comment.time}</p>
                    <p>{comment.comment}</p>
                  </li>
                ))}
              </ul>
              <form className="form" onSubmit={e => pushComment(post, e)}>
                  <input className="form__input" type="text" id="content" name="content" placeholder="Write a comment" value={post.activeInput.comment} onChange={e => post.setComment('User', e.currentTarget.value)} />
                  <button className="form__button">post</button>
              </form>
            </div>

          </li>
        ))}
      </ul>
    </>
  ));
};

ReactDOM.render(<App />, document.getElementById("root"));
