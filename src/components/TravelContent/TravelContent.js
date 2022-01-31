import React from "react";
import './TravelContent.css';
import TravelElement from "./TravelElement/TravelElement";
import YellowButton from "../YellowButton/YellowButton";
import TravelNumber from "./TravelNumber/TravelNumber";

const TravelContent= () => {
  return (
    <div className="travel-content">
      <div>
        <h1 className="travel-content__title">Хочу тур</h1>
        <div className="travel-content__navigation"> 
          <TravelElement 
            topText="Город вылета"
            buttonText="Санкт-Петербург"
            img={'/assets/images/travel/button-pointer.svg'}    
          />
          <TravelElement 
            topText="Страна"
            buttonText="Австралия"
            img={'/assets/images/travel/button-pointer.svg'}  
          />
          <TravelElement 
            topText="Дата прибытия"
            buttonText="18.10.2021"
            img={'/assets/images/travel/calendar.svg'}  
          />

          <TravelNumber 
            topText="Ночей"
          />

          <TravelNumber 
            topText="Туристы"
          />

          <YellowButton 
            text="Найти"
            size={"yellow-button"}
          />
        </div>
      </div>
    </div>
  );
};

export default TravelContent;