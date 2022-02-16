import React from "react";
import './TravelContent.css';
import TravelElement from "./TravelElement/TravelElement";
import YellowButton from "../yellowButton/YellowButton";
import TravelNumber from "./TravelNumber/TravelNumber";

const TravelContent= () => {
  return (
    <div className="travel-content">
      <div>
        <h1 className="travel-content__title">Хочу тур</h1>
        <div className="travel-content__navigation"> 
          <TravelElement 
            label="Город вылета"
            id="departureCity"
            options={[{ value: 'moscow', text: 'Москва' }, { value: 'spb', text: 'Санкт-Петербург' }]}    
          />
          <TravelElement 
            label="Страна"
            id="country"
            options={[{ value: 'russia', text: 'Россия' }, { value: 'azerbaycan', text: 'Азербайджан' }]}   
          />

          <TravelNumber 
            label="Ночей"
            id="nights"
          />

          <TravelNumber 
            label="Туристы"
            id="tourists"
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