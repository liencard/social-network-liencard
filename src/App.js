import React from 'react';
import PostList from "./components/PostList/PostList";
import Detail from './components/Detail/Detail';
import Search from "./components/Search/Search";
import Likes from "./components/Likes/Likes";
import Profile from "./components/Profile/Profile";
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import AddButton from './components/AddButton/AddButton';
import AddPost from './components/AddPost/AddPost';

import { Switch, Route} from 'react-router-dom';
import style from "./App.module.css";


function App() {
  return (
    <>
      <div className={style.app}>
        <Header title={"App Title"}/>
        <div className={style.content}>
          <Switch>
            <Route path="/detail/:id">
              <Detail />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/likes">
              <Likes />
            </Route>
            <Route path="/me">
              <Profile />
            </Route>
            <Route path="/addpost">
              <AddPost />
            </Route>
            <Route exact path="/">
              <PostList />
            </Route>
            <Route>
              <p>Not found</p>
            </Route>
          </Switch>
        </div>
        <NavBar />
      </div>
      <AddButton />
    </>
  );
}


export default App;
