import React from "react";
import PersonalArea from "../../PersonalArea/PersonalArea";
import TelephoneNumber from "../../TelephoneNumber/TelephoneNumber";
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

        <TelephoneNumber 
          number="+7 495 322 54 48"
          type="default"
        />

      </div>
      <PersonalArea/>
    </div>
  );
};

export default HeaderLagoona;