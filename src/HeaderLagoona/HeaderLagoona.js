import React from "react";
import './HeaderLagoona.css';

function HeaderLagoona() {
  return (
      <div className="header__Lagoona">

        <div className="header__content">
          <div className="img__Lagona">
            <img src="/imgLoga/Lagoona.svg" alt="LG" />
            <div className="header__strip"></div>
          </div>
          <span className="header__phone">+7 495 322 54 48</span>
        </div>

        <div className="header__personalArea">
          <img className="ringhtArrow" src="/imgLoga/ringhtArrow.svg" alt="ringht" />
          <span className="personalArea">Личный кабинет</span>
        </div>

      </div>
  );
};

export default HeaderLagoona;