import React, { useState } from 'react';
import tokens from './tokens/tokens.json';
import './App.css';

function RadioButton() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const radioButtonStyle = {
    width: tokens.Checkbox.wdt1.value,
    height: tokens.Checkbox.ht1.value,
    backgroundColor: tokens.Checkbox.red.value,
  };

  return (
    <div className='radios'>
      <label>
        <input
          type="radio"
          style={radioButtonStyle}
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        Option 1
      </label>
      <br />
      <label>
        <input
          type="radio"
          style={radioButtonStyle}
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        Option 2
      </label>
      <br />
      <label>
        <input
          type="radio"
          style={radioButtonStyle}
          value="option3"
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
        />
        Option 3
      </label>
    </div>
  );
}

export default RadioButton;
