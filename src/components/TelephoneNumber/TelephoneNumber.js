import React from "react";
import './TelephoneNumber.css';

const TelephoneNumber = ({ number, type }) => {
  const typeClasses = {
    default: 'phone',
    secondary: 'phone__yellow',
  }

  return (
    <a href={`tel:${ number }`} className={typeClasses[type]}>
      { number }
    </a>
  );
};

export default TelephoneNumber; 