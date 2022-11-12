//  Импортируем библиотеки  //
import React from "react";

//  Импортируем логотип для вставки в src  //
import logo from "../images/logo.svg";

import { Link } from "react-router-dom";

//  Рендерим компонент JSX компонента шапки  //
function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип" />
      <nav className="header__auth">
        <p className="header__auth-text">{props.mail}</p>
        <Link to={props.route} className="header__link" type="button" onClick={props.onClick}>{props.title}</Link>
      </nav>
    </header>
  );
}

//  Экспортируем компонент  //
export default Header;
