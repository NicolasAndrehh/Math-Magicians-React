import { useState } from 'react';
import calculate from '../logic/calculate';
import Buttons from './buttons';
import './calculator.scss';

// Function to create each button of the calculator
const createButtons = (changeResult) => {
  const buttonsInput = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const buttons = [];
  buttonsInput.forEach((value) => {
    buttons.push(
      <Buttons
        key={value}
        value={value}
        setResult={changeResult}
        calculate={calculate}
      />,
    );
  });

  return buttons;
};

// Calculator component
const Calculator = () => {
  const [resultState, setResultState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  // Funtion to change the resultStates
  const changeResult = (event) => {
    const calculateResult = calculate(resultState, event.target.textContent);
    setResultState({ ...calculateResult });
  };

  return (
    <div className="calculator">

      <div className="result">
        <p>{ resultState.total }</p>
        <p>{ resultState.operation }</p>
        <p>{ resultState.next }</p>
      </div>
      <div className="buttons">
        { createButtons(changeResult) }
      </div>
    </div>
  );
};

export default Calculator;
