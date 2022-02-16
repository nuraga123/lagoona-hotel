import React from "react";
import NavigationStrip from "../../navigationStrip/NavigationStrip";
import './TravelElement.css';


const TravelElement= ({ label, id, options }) => {
  return(
    <div className="travel-content__navigations">
      <div className="travel-content__navigation-filter">
        <div className="navigation-filter__main">
          <label className="navigation-filter__label" for={id}>{ label }</label>

          <select id={id} className="navigation-filter__select" onChange={(event) => { console.log('event', event.target.value) }}>
            {
              options.map(option => (
                <option value={option.value}>{ option.text }</option>
              ))
            }
          </select>
        </div>
      </div>

      <div className='navigation-filter__strip'>
        <NavigationStrip/>
      </div>
    </div>
  );
};

export default TravelElement;