import React from "react";
import "./ElementRoom.css";
import Stars from "../star/Stars"
import StarsNo from "../star/StarsNo"
import YellowButton from "../../yellowButton/YellowButton";


const ElementRoom = ({ img, price, location }) => {

  return (
    <div className="placement">
      <img 
        className="placement__img"
        src={img}
        alt="room" 
      />

      <div className="placement__content">
        <div className="placement__title">
          <span className="placement__title-limpid">от</span>
          <span className="placement__title-bolder">{price}</span>
          <span className="placement__title-normal">/ ночь</span>
          
          <div className="list-stars">
            < Stars />
            < Stars />
            < Stars />
            < Stars />
            < StarsNo />
          </div>
                
        </div>

        <div className="placement__subtitle">
          <span className="placement__title-normal">
            {location}
          </span>
          <span className="placement__title-limpid">
            Барселона, Испания
          </span>
          <YellowButton text="Номера"/>
        </div>

      </div>
    </div>
  )
}

export default ElementRoom;