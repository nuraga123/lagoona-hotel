import React from "react";
import './HeaderLagoona.css';

function HeaderLagoona () {
  return (
    <div className="header-lagoona">

      <div className="header-lagoona__content">

        <div className="logo">
          <div className="logo__wrapper-title">
            <img
              className="logo__title-image"
              src="/assets/images/header/lagoona-name.svg"
              alt="Lagoona - сеть отелей"
            />
          <div className="logo__strip"></div>
          </div>
            
          <img
            className="logo__image"
            src="/assets/images/header/lagoona-logo.svg"
            alt="Lagoona логотип"
          />
        </div>

        <span className="phone">
          +7 495 322 54 48
        </span>
      </div>

      <div className="personal-area">
        <img 
          className="ringht-arrow" 
          src="/assets/images/header/ringht-arrow.svg" 
          alt="ringht" 
        />
        <span className="personal-area__title">
          Личный кабинет
        </span>
      </div>

    </div>
  );
};

export default HeaderLagoona;