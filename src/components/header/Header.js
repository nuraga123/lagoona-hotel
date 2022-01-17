import React from "react";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";
import HeaderLagoona from "./HeaderLagoona/HeaderLagoona";
import "../header/Header.css"
const Header = () => {

  return(
    <div className="header-size">
        <HeaderLagoona/>
        <HeaderNavigation/>
    </div>  
  )
}

export default Header; 