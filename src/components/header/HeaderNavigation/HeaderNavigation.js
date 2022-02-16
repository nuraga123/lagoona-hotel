import React from "react";
import NavigationStrip from "../../navigationStrip/NavigationStrip";
import YellowButton from "../../yellowButton/YellowButton";
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
      <NavigationStrip/>
      <div className="navigation__button">
        <YellowButton 
          text='Хочу тур'
          size={"yellow-button"}
        />
        <YellowButton 
          text='Обратный звонок'
          size={"yellow-button"}
        />
      </div>
    </div>
  );
}

export default HeaderNavigation;