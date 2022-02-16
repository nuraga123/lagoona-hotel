import React from "react";
import './SectionService.css';
import serviceElement from "../SectionService/serviceElement";
import ContainerService from "../SectionService/ContainerService/ContainerService";
import Heading from "../Heading/Heading";

const SectionService = () => {

  return(
    <div>
      <Heading content="Услуги"/>        
      <div className="service">
        {serviceElement.map(item => (
          <ContainerService {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionService;