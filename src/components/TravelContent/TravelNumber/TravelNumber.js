import React from "react";
import './TravelNumber.css';
import NavigationStrip from "../../navigationStrip/NavigationStrip";


const TravelNumber = ({ topText }) => {
  return (
    <div className="num">
      <div className="numer">
        <span className="navigation-filter__top-text"> 
          { topText }
        </span>
        <input 
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