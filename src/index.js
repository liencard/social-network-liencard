import React from "react";
import ReactDOM from "react-dom";

import Store from "./js/stores/Store";
import Post from './js/models/Post';

import { useObserver } from "mobx-react-lite";
import "./style.css";

const store = new Store();

store.seed([
  new Post({ description: "Zon, zee, strand! Morbi nec rutrum magna. Curabitur et malesuada nunc.", user: "Lien Cardoen", picture: "assets/img/cyprus.png", location: "Cyprus", avatar: "cyprus.png", time: "6h ago" }),
  new Post({ description: "Zonsondergang uit Cyprus. Morbi sed nisl quis urna ornare euismod. Suspendisse sed vestibulum massa.", user: "Sarah Van Den Berghe", picture: "assets/img/duinen.jpg", location: "Duinkerke", avatar: "cyprus.png", time: "1 hour ago" })
]);

store.posts[0].addComment('Daan', 'Wauw staat ook op mijn travellist!!', '33min ago');
store.posts[0].addComment('Helena', 'Oh tof, veel plezier 😛', '6min ago');

store.posts[1].addComment('Felix', 'Wauw staat ook op mijn travellist!!', '8h ago');
store.posts[1].addComment('Lotte', 'Amuseer jullie daar ☀', '2 days ago');


const pushComment = (post,e) => {
  post.addComment(post.commentInput.user, post.commentInput.comment, post.commentInput.time);
  post.setComment(post.commentInput.user, '');
  e.preventDefault();
}

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
              <button
                style={{backgroundImage: `url(${post.like ? 'assets/img/heart-full.svg' : 'assets/img/heart-border.svg'})`}}
                className={`post__like ${post.like ? "post--liked" : "post--unlike"}`}
                onClick={() => { post.addLike(); }}>{post.like ? "Liked" : "Like"}</button>
              <button className="post_comment"><span className="commentAmount">{post.commentsLength}</span> Comments</button>
            </div>

            <div className="comments">
              <ul className="comments__list">
                {post.comments.map(comment => (
                  <li className="comment" key={comment.comment}>
                    <p><span className="comment__user">{comment.user}</span> - <span className="comment__time">{comment.time}</span></p>
                    <p className="comment__comment">{comment.comment}</p>
                  </li>
                ))}
              </ul>
              <form className="form" onSubmit={e => pushComment(post, e)}>
                  <input className="form__input" type="text" id="content" name="content" placeholder="Write a comment" value={post.commentInput.comment} onChange={e => post.setComment('User', e.currentTarget.value)} />
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
