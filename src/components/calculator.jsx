import Buttons from './buttons';
import './calculator.scss';

// Function to create each button of the calculator
const createButtons = () => {
  const buttonsInput = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const buttons = [];
  buttonsInput.forEach((value) => {
    buttons.push(<Buttons value={value} />);
  });

  return buttons;
};

// Calculator component
const Calculator = () => (
  <div className="calculator">

    <p className="result">0</p>
    <div className="buttons">
      { createButtons() }
    </div>
  </div>
);

export default Calculator;
