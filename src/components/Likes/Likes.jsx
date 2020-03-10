import React from 'react';
import { useObserver } from 'mobx-react-lite';
import Header from '../Header/Header';

import style from './Likes.module.css';

const Likes = () => {

    return useObserver(() => (
        <>
            <Header title={"Likes"} />
            <p className={style.topSpacer}>No likes yet.</p>
        </>

    ));
};

export default Likes;
