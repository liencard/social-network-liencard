import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as HomeLogo } from "./home.svg";
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
          <NavLink
            className={style.link}
            activeClassName={style.active}
            to="/search"
          >
            Search
          </NavLink>
        </li>
        <li>
          <NavLink
            className={style.link}
            activeClassName={style.active}
            to="/likes"
          >
            Likes
          </NavLink>
        </li>
        <li>
          <NavLink
            className={style.link}
            activeClassName={style.active}
            to="/me"
          >
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
