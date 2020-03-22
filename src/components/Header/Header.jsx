import React from "react";
import BackLink from '../BackLink/BackLink';
import style from "./Header.module.css";
import { useParams } from 'react-router-dom';

const Header = ({title}) => {

    // const { title, search } = useParams();
    // console.log(title);

    //const { search } = useParams();
    //console.log(search + 'test');

    return (
        <header className={style.header}>
            {title !== "TripIt" ? <BackLink /> : ''}
            <h2 className={style.title}>{title}</h2>
        </header>
    );
};

export default Header;
