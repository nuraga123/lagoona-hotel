import React from "react";
import './Plus.css';
import PlusElement from "./plusElement/PlusElement";
import elementPlus from "./plusElement/elementPlus";
import Heading from "../Heading/Heading"; 

function Plus() {
  return (
    <div>
      <Heading content="Преимущества"/>  
      <div className="plus">
        {elementPlus.map((item) => (
          <PlusElement 
            className="plus" {...item} 
          />
        ))}
      </div>
    </div>
  );
}

export default Plus;