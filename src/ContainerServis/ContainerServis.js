import React from "react";
import "./ContainerServis.css";

const ContainerServis = ({title,img, text}) => {
  return(
    <div className="servis__back">
      <img className="servis__img" src={img} alt="maldiv"/>
      <div className="servis__content">
        <h2 className="servis__title">{title}</h2>
        <div className="servis__strelka"></div>
      </div>
      <p className="servis__text">{text}</p>  
    </div>
  );
};

export default ContainerServis;