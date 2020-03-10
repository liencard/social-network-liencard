import React from 'react';
import { NavLink } from "react-router-dom";
import { useObserver } from 'mobx-react-lite';

import style from "./AddButton.module.css";

const AddButton = () => {

    return useObserver(() => (
        <NavLink to="/addpost">
            <button className={style.add__button}>+</button>
        </NavLink>
    ));
};

export default AddButton;
