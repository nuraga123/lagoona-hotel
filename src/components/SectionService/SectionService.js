import React from "react";
import './SectionService.css';
import serviceElement from "../SectionService/serviceElement";
import ContainerService from "../SectionService/ContainerService/ContainerService";

const SectionService = () => {

  return(
    <div>
      <h1 className="title">
        Услуги
      </h1>
      <div className="service">
        {serviceElement.map(item => (
          <ContainerService
            img={item.img} 
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionService;