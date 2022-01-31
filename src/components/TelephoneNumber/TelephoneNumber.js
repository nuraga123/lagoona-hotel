import React from "react";
import './TelephoneNumber.css';

const TelephoneNumber = ({ number, size }) => {
  return (
    <a href={`tel:${ number }`} className={size}>
      { number }
    </a>
  );
};

export default TelephoneNumber; 