import React from "react";
import BackLink from '../BackLink/BackLink';
import style from "./Header.module.css";

const Header = ({ title }) => {
    return (
        <header className={style.header}>
            {title !== "Travel App" ? <BackLink /> : ''}
            <h2 className={style.title}>{title}</h2>
        </header>
    );
};

export default Header;
