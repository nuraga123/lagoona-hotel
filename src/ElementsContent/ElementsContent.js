import React from "react";
import './ElementsContent.css';

const ElementsContent = ({title,img, price, details}) => {
  return(
    <div className="main__contayner1">
        <img className="main__img1" src={img} alt="maldiv"/>
        <h2 className="img1__title">{title}</h2>
        <span className="img1__price">{price}</span>
        <span className="details">{details}</span>
        <div className="img1__strelka"></div>
    </div>
  );
};

export default ElementsContent;