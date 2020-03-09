import React from 'react';
import PostList from "./components/PostList/PostList";
import Detail from './components/Detail/Detail';
import { Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Switch>

        <Route path="/detail/:id">
          <Detail />
        </Route>

        <Route exact path="/">
          <PostList />
        </Route>

        <Route>
          <p>Not found</p>
        </Route>
      </Switch>
    </>
  );
}


export default App;
