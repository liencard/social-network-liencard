import React from 'react';
import { useHistory } from 'react-router-dom';

const BackLink = () => {
  const history = useHistory();
  return (
    <button
      onClick={() => {
        history.goBack();
      }}
    >
      &larr; back
    </button>
  );
};

export default BackLink;
