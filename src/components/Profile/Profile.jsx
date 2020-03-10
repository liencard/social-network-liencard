import React from 'react';
import { useObserver } from 'mobx-react-lite';
import Header from '../Header/Header';

const Profile = () => {

    return useObserver(() => (
        <>
            <Header title={"Profile"} />
            <p>Lorum ipsum</p>
        </>

    ));
};

export default Profile;
