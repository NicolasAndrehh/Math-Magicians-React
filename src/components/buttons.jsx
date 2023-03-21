import PropTypes from 'prop-types';

// Function to get the classnames for special buttons depending on it's value
const getClassName = (value) => {
  const className = {
    0: 'zero',
    '=': 'orange-bg',
    '+': 'orange-bg',
    '-': 'orange-bg',
    x: 'orange-bg',
    '÷': 'orange-bg',
  };

  return className[value];
};

// Buttons component
const Buttons = (props) => {
  const { value } = props;
  const { setResult } = props;

  return (
    <button type="button" className={`${getClassName(value)} button`} onClick={(e) => setResult(e)}>
      { value }
    </button>
  );
};

Buttons.propTypes = {
  value: PropTypes.string.isRequired,
  setResult: PropTypes.func.isRequired,
};

export default Buttons;
