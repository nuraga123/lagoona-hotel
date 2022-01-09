import React from "react";
import "./HeaderNavigation.css";

function HeaderNavigation() {
  return (
    <div className="navigation__bar">
      <ul className="navigation">
        <li className="navigation">О нас</li>
        <li className="navigation">Услуги</li>
        <li className="navigation">Преимущества</li>
        <li className="navigation">Размещение</li>
        <li className="navigation">Блог</li>
        <li className="navigation">Контакты</li>
      </ul>

      <div className="header__strip2"></div>
      <div className="tour1">Хочу тур</div>
      <div className="tour1">Обратный звонок</div>
    </div>
  );
}

export default HeaderNavigation;