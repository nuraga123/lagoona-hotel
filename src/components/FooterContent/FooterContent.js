import React from "react";
import TelephoneNumber from "../TelephoneNumber/TelephoneNumber";
import "./FooterContent.css";


const FooterContent = () => {
  return (
    <div className="footer-content">

      <div className="footer-content__left-column">
        <div className="left-column">
        <p className="footer-content__text">
          © 2012-2022 Управляющая компания Объединенной сети «Лагуна Хотелс»
        </p>
        <p className="footer-content__text">
          Представленная на сайте информация носит справочный характер и не является публичной офертой
        </p>
        </div>
        <span className="contayner__text-yellow">
          Пользовательское соглашение
        </span>
      </div>

      <div className="footer-content__center-column">
        <p className="footer-content__text">
          11710, улица Юности, дом 5 строение 4, офис 2
        </p>
        <TelephoneNumber 
          number="+7 (499) 535-64-34"
          type="secondary"
        />
        
        <TelephoneNumber 
          number="+7 (495) 005-05-44"
          type="secondary"
        />

        <a href="lg.oona@mail.ru" className="contayner__text-yellow">
          lg.oona@mail.ru
        </a>
        <a href="hotels.ln@mail.ru" className="contayner__text-yellow">
          hotels.ln@mail.ru
        </a>
      </div>
      
      <img 
        className="footer-content__img"
        src="/assets/images/icons/sun-grey.svg"
        alt="lagoona"
      />

      {/*icons*/}
      <div className="footer-content__icons">
        {/*icon-1*/}
        <img 
          className="footer-content__icon"
          src="/assets/images/icons/Component1.svg"
          alt="lagoona"
        />
        
        {/*icon-2*/}
        <img 
          className="footer-content__icon"
          src="/assets/images/icons/twitter.svg"
          alt="lagoona"
        />
        
        {/*icon-3*/}
        <img 
          className="footer-content__icon"
          src="/assets/images/icons/facebook.svg"
          alt="lagoona"
        />
        
        {/*icon-4*/}
        <img 
          className="footer-content__icon"
          src="/assets/images/icons/vk.svg"
          alt="lagoona"
        />

        {/*icon-5*/}
        <img 
          className="footer-content__icon"
          src="/assets/images/icons/instagram.svg"
          alt="lagoona"
        />
      </div>
    </div>
  );
};

export default FooterContent;