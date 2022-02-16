import React from "react";
import './ElementsContent.css';

const ElementContent = ({ 
  title, img, price, details, size
}) => {
    return (
      <div className={`element-contnent element-content--${ size }`}>
        <img className='element-content__img' src={ img } alt="maldiv" />
        <h2 className={ `element-content__title--${ size }` }>{ title }</h2>
        <span className={ `element-content__price--${ size }` }>{ price }</span>
        <span className={ `element-content__details--${ size }` }>{ details }</span>
        <div className={ `element-content__pointer--${ size }` }></div>
      </div>
    );
  };

export default ElementContent;
