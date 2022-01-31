import React from "react";
import NavigationStrip from "../../navigationStrip/NavigationStrip";
import './TravelElement.css';


const TravelElement= ({ topText, buttonText, img }) => {
  return(
    <div className="travel-content__navigations">
      <div className="travel-content__navigation-filter">
        <div className="navigation-filter__main">

          <select className="navigation-filter__top-text" onChange={(event) => { console.log('event', event.target.value) }}>
            <option  value="moscow">
              Москва
            </option>
            <option  value="spb">
              Санкт-Петербург
            </option>
            <option  value="ufa">
              Уфа
            </option>   
           { topText }
          </select>
          <span className="navigation-filter__button-text">
            { buttonText }
          </span>        

        </div>
        
        <img 
          className="navigation-filter__img"
          src={ img } 
        />

      </div>

      <div className='navigation-filter__strip'>
        <NavigationStrip/>
      </div>
    </div>
  );
};

export default TravelElement;