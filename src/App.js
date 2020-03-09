import React from 'react';
import PostList from "./components/PostList/PostList";
import Detail from './components/Detail/Detail';
import Search from "./components/Search/Search";
import Likes from "./components/Likes/Likes";
import Profile from "./components/Profile/Profile";
import NavBar from './components/NavBar/NavBar';

import { Switch, Route} from 'react-router-dom';
import style from "./App.module.css";


function App() {
  return (
    <>
      <div className={style.app}>
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
    </>
  );
}


export default App;
