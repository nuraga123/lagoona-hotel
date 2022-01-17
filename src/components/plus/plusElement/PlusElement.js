import React from "react";
import "../plusElement/PlusElement.css";

const PlusElement = ({img, text}) => {
  return (
      <div className="plus__content">
          <img src={img} className="plus__img" alt="bs"/>
          <p className="plus__text">{text}</p>
        </div>
  );
}; 

export default PlusElement;