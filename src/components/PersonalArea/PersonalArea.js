import React from "react";
import './PersonalArea.css';

const PersonalArea = () => {
  return (
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
  )
};

export default PersonalArea;