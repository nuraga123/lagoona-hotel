import React from "react";
import ContainerServis from "../ContainerServis/ContainerServis";
import './SectionServis.css';
import servisElement from "../elements/servisElement";

const SectionServis = () => {

  return(
    <div className="servis__main">
        {servisElement.map(item => (
          <ContainerServis
            img={item.img} 
            title={item.title}
            text={item.text}
          />
        ))}
    </div>
  );
};

export default SectionServis;