import React from "react";
import Heading from "../Heading/Heading";
import './ContactsContent.css'
import ContactsElements from "./ContactsElements/ContactsElements";
import YellowButton from "../YellowButton/YellowButton";
import TelephoneNumber from "../TelephoneNumber/TelephoneNumber";

const ContactsContent = () => {
  return (
    <div className="contacts-content">
      <Heading content={'Контакты'}/>
      <div className="contacts-content__contayner">
        <div className="contacts-content__contayner-size">
          <div className="contacts-content__contayner-text">
            
            <ContactsElements
              title="Адрес"
              text="Москва, улица Юности, дом 5 строение 4, офис 2"  
              size={"contayner__text"}  
            />

            {/* phone*/}
            <ContactsElements
              title="Адрес"
              text={
                <div className="contayner-phone__text">
                  <TelephoneNumber 
                    number="+7 (499) 535-64-34"
                    size={"phone__yellow"}
                  />
                  
                  <TelephoneNumber 
                    number="+7 (495) 005-05-44"
                    size={"phone__yellow"}
                  />
                </div>
              }  
              size={"contayner__text"}  
            />

            {/*E-mail*/}
            <ContactsElements
              title="E-mail"
              size={"contayner__text"} 
              text={                
                <div className="contayner-phone__text">
                  <a href="#" className="contayner__text-yellow">
                    lg.oona@mail.ru
                  </a>
                  <span className="contayner__text-grey"> 
                    по вопросам бронирования
                  </span>
                  <a href="#" className="contayner__text-yellow">
                    hotels.ln@mail.ru
                  </a>
                  <span className="contayner__text-grey">
                    по вопросам сотрудничества
                  </span>
                </div>
              }
            />  
          
            <ContactsElements
              title="График"
              text="Понедельник - пятница, с 10:00 до 19:00"  
              size={"contayner__text"}  
            />
  
            <YellowButton 
              text="Построить маршрут"
              size={"yellow-button__big"}
            />
            
          </div>
          
          <div className="contacts-content__img">
            <img
              src="/assets/images/contact/reception.jpg"
            />
          </div>
        </div>
      </div>
    </div>    
  );
};

export default ContactsContent;