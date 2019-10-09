import React from 'react';
import css from './Header.module.css';
import {NavLink} from "react-router-dom"

const Header = (props) => {
    return (
      <header className={css.header}>
          <img src="http://juicep.ru/i/57/3/3.png" alt="logo coffee"/>
          <div className={css.loginBlock}>
            {props.isAuth 
                ? <div>{props.login} <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={"/login"}>Login</NavLink>
            }
          </div>
      </header>
    );
}

export default Header;
