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
        <Route path="/home" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
