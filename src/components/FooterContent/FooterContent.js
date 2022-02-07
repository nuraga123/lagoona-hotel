import React from "react";
import TelephoneNumber from "../TelephoneNumber/TelephoneNumber";
import "./FooterContent.css";


const FooterContent = () => {
  return (
    <div className="footer-content">

      <div className="footer-content__left-column">
        <div className="left-column">
        <p className="footer-content__text">
          © 2012-2020 Управляющая компания Объединенной сети «Лагуна Хотелс»
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

        <a href="#" className="contayner__text-yellow">
          lg.oona@mail.ru
        </a>
        <a href="#" className="contayner__text-yellow">
          hotels.ln@mail.ru
        </a>
      </div>
      
      <img 
        className="footer-content__img"
        src="/assets/images/icons/sun-grey.svg"
      />

      {/*icons*/}
      <div className="footer-content__icons">
        {/*icon-1*/}
        <img 
          className="footer-content__icon"
          src="/assets/images/icons/Component1.svg"
        />
        
        {/*icon-2*/}
        <img 
          className="footer-content__icon"
          src="/assets/images/icons/twitter.svg"
        />
        
        {/*icon-3*/}
        <img 
          className="footer-content__icon"
          src="/assets/images/icons/facebook.svg"
        />
        
        {/*icon-4*/}
        <img 
          className="footer-content__icon"
          src="/assets/images/icons/vk.svg"
        />

        {/*icon-5*/}
        <img 
          className="footer-content__icon"
          src="/assets/images/icons/instagram.svg"
        />
      </div>
    </div>
  );
};

export default FooterContent;