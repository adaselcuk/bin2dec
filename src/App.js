import React, { useState } from 'react';
import './App.css';

function App() {
  // variables
  const [binary, setBinary] = useState(''); // this will initialize the state of the binary number to an empty string
  const [decimal, setDecimal] = useState(''); // this will initialize the state of the decimal number to an empty string
  // write const because in React, state should be immutable
  // never directly modify state variable
  // state variables are used to record and react to user actions that change data of application
  //function is the setBinary or setDecimal that will be used to change the variable

  // error handling
  const handleBinChange = (e) => {
    const value = e.target.value;

    // see if user entered only 0 or 1s
    if (!/^[01]*$/.test(value)) {
      window.alert('Invalid input! Please enter only 0s and 1s.');
    } else {
      setBinary(value);
      setDecimal(value ? binarytoDecimal(value) : '');
    }
  };

  const binarytoDecimal = (binary) => {
    let decimal = 0;

    for (let i = 0; i < binary.length; i++) {
      if (binary[binary.length - 1 - i] == '1') {
        decimal += Math.pow(2, i);
      }
    }
    return decimal.toString();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bin2Dec Converter</h1>
        <input
          type="text"
          value={binary}
          onChange={handleBinChange}
          placeholder="Enter binary number"
      />
      <p>Decimal: {decimal}</p>
      </header>
    </div>
  );
}

export default App