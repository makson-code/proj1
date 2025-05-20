import React from "react";
import s from './Header.module.scss'
import { NavLink } from "react-router-dom";


export const Header = () => {
    return (
      <div className={s.wrapper}>
        <div className={s.header}>
        <NavLink to="/" className={s.title}>T-NEWS</NavLink>
          <nav className={s.menu}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="login">Login</NavLink>
            <NavLink to="profile">Profile</NavLink>
          </nav>
        </div>
      </div>
    );
  };