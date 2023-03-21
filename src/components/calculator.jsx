import { useState } from 'react';
import calculate from '../logic/calculate';
import './calculator.scss';
import createButtons from './createButtons';

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
