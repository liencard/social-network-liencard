import React from 'react';
import { useObserver } from 'mobx-react-lite';
import Header from '../Header/Header';

const Search = () => {

    return useObserver(() => (
        <>
            <Header title={"Search"} />
            <p>Lorum ipsum</p>
        </>

    ));
};

export default Search;
