import React from "react";
import './ContactsElements.css'

const ContactsElements = ({ title, text, size, mail, phone }) => {
  return (
    <div className="main">
      <div className="main-contayner">
        
        <div className="contayner__title">
          {title}
        </div>

        <div className={size}>
          {text}
        </div>

      </div>
      <div className="contayner__strip"></div>
    </div>    
  );
};

export default ContactsElements;