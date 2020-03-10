import React from 'react';
import { useObserver } from 'mobx-react-lite';
import Header from '../Header/Header';

import style from './Search.module.css';

const Search = () => {

    return useObserver(() => (
      <>
        <Header title={'Search'} />
        <p className={style.topSpacer}>Work in progress</p>
      </>
    ));
};

export default Search;
