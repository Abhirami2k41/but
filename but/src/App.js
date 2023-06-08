import React from 'react';
import './App.css';
import Button from './Button';
// import Buttonn from './Buttonn';
import Checkbox from './Checkbox';
import RadioButton from './radiobutton';
import tokens from './tokens/tokens.json';

function App() {
  const h1Style = {
    fontSize: `${tokens.global.h1.value}px`,
    fontFamily: tokens.tex
  };

  const pStyle = {
    fontSize: `${tokens.global.h4.value}px`,
    fontFamily: tokens.global.body.value,
  };
  return (
    <div className="App">
      <header className="App-header">
      <h1 style={h1Style}>My App</h1>
      <p style={pStyle}>Some components are given below. Try it</p>
        {/* <Buttonn /> */}
        <Button />
        <br />
        <RadioButton />
        <br />
        <Checkbox />
      </header>
    </div>
  );
}

export default App;