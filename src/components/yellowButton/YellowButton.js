import React from "react";
import './YellowButton.css';

const YellowButton = ({ text, size }) => {
  return (
    <button className={ size }>
      { text }
    </button>
  );
};

export default YellowButton;