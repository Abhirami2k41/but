import React, { useState } from 'react';
import tokens from './tokens/tokens.json';



function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const checkboxStyle = {
    width: tokens.Checkbox.wdt1.value,
    height: tokens.Checkbox.ht1.value,
    backgroundColor: tokens.Checkbox.red.value,
  };

  return (
    <div className='App'> 
      <input
      className='customCheckbox'
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        style={checkboxStyle}
      />
      <label>checked</label>
    </div>
  );
}

export default Checkbox;




// import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
// import * as React from 'react';
// import * as ReactDom from 'react-dom';
// import './App.css';

// function Checkbox(){
//   return (
//     <ul>
//         <li><CheckBoxComponent label="Primary" cssClass="e-primary" checked={true}/></li>
//     </ul>
//   );
// }
// export default Checkbox;
// ReactDom.render(<Checkbox />, document.getElementById('check-box'));


