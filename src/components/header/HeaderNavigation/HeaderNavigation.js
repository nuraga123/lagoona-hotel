import React from "react";
import "./HeaderNavigation.css";

function HeaderNavigation () {
  return (
    <div className="navigation">
      <ul className="navigation-list">
        <li className="navigation-list__item">О нас</li>
        <li className="navigation-list__item">Услуги</li>
        <li className="navigation-list__item">Преимущества</li>
        <li className="navigation-list__item">Размещение</li>
        <li className="navigation-list__item">Блог</li>
        <li className="navigation-list__item">Контакты</li>
      </ul>

      <div className="navigation__strip"></div>
      <div className="navigation__text">Хочу тур</div>
      <div className="navigation__text">Обратный звонок</div>
    </div>
  );
}

export default HeaderNavigation;