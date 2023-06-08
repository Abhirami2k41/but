import React from 'react';
import './App.css';
// import './build/css/_variables.css';
import tokens from './tokens/tokens.json';


function Button() {

  const buttonColor = tokens.global.pink.value;
  const buttonFontSize = tokens.global.h3.value;
  const buttonBorderRadius = tokens.global.c.value;
  const buttonFontFamily = tokens.global.head.value

  const buttonStyle = {
    backgroundColor: buttonColor,
    fontSize: `${buttonFontSize}px`,
    borderRadius: `${buttonBorderRadius}px`,
    fontFamily: buttonFontFamily,
  };

  return (
    <div className="App">
      {/* <button className="custombutton">Button-1</button> */}
      {/* <button style={{ backgroundColor: buttonColor, fontSize: `${fontSize}px`}}>Button-1</button>
      <br />
      <button style={{backgroundColor: buttonnColor, fontSize: `${fonttSize}px`}}>Button-2</button> */}
      <button className="custombutton" style={buttonStyle}>Button-1</button>

    </div>
  );
}

export default Button;
