import React from "react";
import BackLink from '../BackLink/BackLink';
import style from "./Header.module.css";

const Header = ({ title }) => {
    return (
        <header className={style.header}>
            <BackLink />
            <h2 className={style.title}>{title}</h2>
            <p>v</p>
        </header>
    );
};

export default Header;
