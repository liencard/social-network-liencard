import React, { useState }  from 'react';
import { useObserver } from 'mobx-react-lite';
import Header from '../Header/Header';
import Post from '../Post/Post';

import style from './Search.module.css';

import { useStores } from '../../hooks';

const Search = () => {

  const [search, setSearch] = useState("");
  const { dataStore } = useStores();

    return useObserver(() => (
      <>
        <Header title={'Search Location'} />
        <div className={style.container}>
          <form className={style.topSpacer}>
            <label className={style.label}>
              <span>Search:</span>
              <input
                className={style.input}
                type="search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search a location"
              />
            </label>
          </form>
          <ul>
            {dataStore.searchLocation(search).map(post => (
              <Post post={post} key={post.id} />
            ))}
          </ul>
        </div>
      </>
    ));
};

export default Search;
