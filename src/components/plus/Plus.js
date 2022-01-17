import React from "react";
import './Plus.css';
import PlusElement from "./plusElement/PlusElement";
import elementPlus from "./plusElement/elementPlus";


function Plus() {
  return (
    <div>
      <h1 className="title">Преимущества</h1>
      <div className="plus">
        {elementPlus.map((item) => (
          <PlusElement className="plus"
            img={item.img}
            text={item.text} />
        ))}
      </div>
    </div>
  );
}

export default Plus;