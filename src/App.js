import React from 'react';
import PostList from "./components/PostList/PostList";
import Detail from './components/Detail/Detail';
import Search from "./components/Search/Search";
import Likes from "./components/Likes/Likes";
import Profile from "./components/Profile/Profile";
import NavBar from './components/NavBar/NavBar';
import AddButton from './components/AddButton/AddButton';
import AddPost from './components/AddPost/AddPost';

import { Switch, Route} from 'react-router-dom';
import { ROUTES } from './const/index';
import style from "./App.module.css";

function App() {
  return (
    <>
      <div className={style.app}>
        <div className={style.content}>
          <Switch>
            <Route path={ROUTES.postDetail.path}>
              <Detail />
            </Route>
            <Route path={ROUTES.search}>
              <Search />
            </Route>
            <Route path={ROUTES.likes}>
              <Likes />
            </Route>
            <Route path={ROUTES.profile}>
              <Profile />
            </Route>
            <Route path={ROUTES.addpost}>
              <AddPost />
            </Route>
            <Route exact path={ROUTES.home}>
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
