import React from "react";
import './ElementsContent.css';

const ElementContent = ({
  title, 
  img, 
  price, 
  details, 
  size, 
  style__img,
  style__title,
  style__price,
  style__details,
  style__pointer
}) => {
    return (
      <div className={size}>
        <img className={style__img} src={img} alt="maldiv" />
        <h2 className={style__title}>{title}</h2>
        <span className={style__price}>{price}</span>
        <span className={style__details}>{details}</span>
        <div className={style__pointer}></div>
      </div>
    );
  };

export default ElementContent;
