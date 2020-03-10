import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeLogo } from "./home.svg";
import { ReactComponent as SearchLogo } from "./search.svg";
import { ReactComponent as LikesLogo } from "./likes.svg";
import { ReactComponent as ProfileLogo } from "./profile.svg";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav>
      <ul className={style.list}>
        <li>
          <NavLink className={style.button} activeClassName={style.active} to="/">
            <HomeLogo fill="currentColor" />
            <span className="hidden">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={style.button} activeClassName={style.active} to="/search">
            <SearchLogo fill="currentColor" />
            <span className="hidden">Search</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={style.button} activeClassName={style.active} to="/likes">
            <LikesLogo fill="currentColor" />
            <span className="hidden">Likes</span>
          </NavLink>
        </li>
        <li>
          <NavLink className={style.button} activeClassName={style.active} to="/me">
            <LikesLogo fill="currentColor" />
            <span className="hidden">Profile</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
