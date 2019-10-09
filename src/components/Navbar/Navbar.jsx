import React from 'react';
import css from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsContainer from '../Friends/FriendsContainer';

const Navbar = () => {
    return (
      <nav className={css.nav}>
        <ul>
          <li className={css.item}>
            <NavLink to="/profile" activeClassName={css.activeLink}>Profile</NavLink>
          </li>
          <li className={css.item}>
            <NavLink to="/dialogs" activeClassName={css.activeLink}>Messages</NavLink>
          </li>
          <li className={css.item}>
            <NavLink to="/users" activeClassName={css.activeLink}>Users</NavLink>
          </li>
          <li className={css.item}>
            <NavLink to="/news" activeClassName={css.activeLink}>News</NavLink>
          </li>
          <li className={css.item}>
            <NavLink to="/music" activeClassName={css.activeLink}>Music</NavLink>
          </li>
          <li className={css.item}>
            <NavLink to="/settings" activeClassName={css.activeLink}>Settings</NavLink>
          </li>
        </ul>
        <FriendsContainer/>
      </nav>
    );
}

export default Navbar;
