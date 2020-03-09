import React from 'react';
import Posts from "./components/Posts";
import Detail from './components/Detail';
import { Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Switch>

        <Route path="/detail/:id">
          <Detail />
        </Route>

        <Route exact path="/">
          <Posts />
        </Route>

        <Route>
          <p>Not found</p>
        </Route>
      </Switch>
    </>
  );
}


export default App;
