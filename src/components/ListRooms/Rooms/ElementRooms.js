import React from "react";
import "./ElementRooms.css";
import YellowButton from "../../yellowButton/YellowButton";
import ListStars from "../ListStars/ListStars";


const ElementRooms = ({ img, price, location, rating}) => {

  return (
    <div className="placement">

      <img 
        className="placement__img"
        src={img}
        alt="room1" 
      />

      <div className="placement__content">
        <div className="placement__title">
          <span className="placement__title-limpid">от</span>
          <span className="placement__title-bolder">{price}</span>
          <span className="placement__title-normal">ночь</span>
          <ListStars  rating={rating} />
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

export default ElementRooms;