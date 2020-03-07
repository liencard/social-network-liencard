import React from 'react';
import Posts from "./components/Posts";
import PropTypes from 'prop-types';


function App({ store }) {
  return (
    <>
      <Posts store={store} />
    </>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
