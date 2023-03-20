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

  return (
    <button type="button" className={`${getClassName(value)} button`}>
      { value }
    </button>
  );
};

Buttons.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Buttons;
