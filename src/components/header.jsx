import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => (
  <header className="header">
    <h1>Math Magicians</h1>
    <nav>
      <ul className="nav-links">
        <li>
          <NavLink to="/Math-Magicians-React/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Math-Magicians-React/calculator">Calculator</NavLink>
        </li>
        <li>
          <NavLink to="/Math-Magicians-React/quote">Quote</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
