import React from "react";
import "./ContainerService.css";

const ContainerService = ({title,img, text}) => {
  return(
    <div className="service-contayner">
      <img className="service-contayner__img" src={img} alt="maldiv"/>
      <div className="service-contayner__content">
        <h2 className="service-contayner__title">{title}</h2>
        <div className="service-contayner__pointer"></div>
      </div>
      <p className="service-contayner__text">{text}</p>  
    </div>
  );
};

export default ContainerService;