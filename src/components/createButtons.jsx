import calculate from '../logic/calculate';
import Buttons from './buttons';

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

export default createButtons;
