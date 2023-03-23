// import { NavLink } from 'react-router-dom';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import './App.scss';
import Calculator from './components/calculator';
import Header from './components/header';
import Home from './components/home';
import Quote from './components/quote';

const App = () => (
  <>
    <BrowserRouter>

      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/Math-Magicians-React/" element={<Home />} />
        <Route path="/Math-Magicians-React/calculator" element={<Calculator />} />
        <Route path="/Math-Magicians-React/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
