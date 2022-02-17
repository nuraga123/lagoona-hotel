import React from "react";
import './TravelNumber.css';
import NavigationStrip from "../../navigationStrip/NavigationStrip";


const TravelNumber = ({ label, id, type, size}) => {
  return (
    <div className="num">
      <div className="num__title">
        <label for={id} className="num-label"> 
          { label }
        </label>
        <input 
          id={ id }
          className={`numbers--${size}`}
          type={ type }
        />
      </div>
      <div className='navigation-filter__strip'>
        <NavigationStrip/>
      </div>
    </div>
  )
}

export default TravelNumber;