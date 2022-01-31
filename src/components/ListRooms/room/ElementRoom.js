import React from "react";
import "./ElementRoom.css";
import YellowButton from "../../YellowButton/YellowButton";
import ListStars from "../ListStars/ListStars";


const ElementRoom = ({ img, price, location,  rating}) => {

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
    
          <ListStars  rating={rating}/>
        </div>

        <div className="placement__subtitle">
          <span className="placement__title-normal">
            {location}
          </span>
          <span className="placement__title-limpid">
            Барселона, Испания
          </span>
          
        </div>
        <div className="button">
          <YellowButton 
            size={"yellow-button"}
            text="Номера"
          />
        </div>
      </div>
    </div>
  )
}

export default ElementRoom;