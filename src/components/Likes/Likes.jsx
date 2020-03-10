import React from 'react';
import { useObserver } from 'mobx-react-lite';
import Header from '../Header/Header';

const Likes = () => {

    return useObserver(() => (
        <>
            <Header title={"Likes"} />
            <p>Lorum ipsum</p>
        </>

    ));
};

export default Likes;
