import React from 'react';
import { useObserver } from 'mobx-react-lite';
import Header from '../Header/Header';

import style from './Profile.module.css';

const Profile = () => {

    return useObserver(() => (
      <>
        <Header title={'Profile'} />
        <p className={style.topSpacer}>Work in progress</p>
      </>
    ));
};

export default Profile;
