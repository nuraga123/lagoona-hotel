import React from "react";
import './TravelNumber.css';
import NavigationStrip from "../../navigationStrip/NavigationStrip";


const TravelNumber = ({ label, id }) => {
  return (
    <div className="num">
      <div className="numer">
        <label for={id} className="navigation-filter__label"> 
          { label }
        </label>
        <input 
          id={id}
          className="numbers"
          type={'number'}
        />
      </div>
      <div className='navigation-filter__strip'>
        <NavigationStrip/>
      </div>
    </div>
  )
}

export default TravelNumber;