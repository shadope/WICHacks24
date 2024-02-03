import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import MainNavbar from './components/MainNavbar';
import InputBox from './components/InputBox';
import Dropdown from './components/Dropdown';
import DisplayImage from './components/DisplayImage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <MainNavbar/>
      <InputBox zip="Zip Code"/>
      <Dropdown field="Color" one="Black" two="Blue" three="Green" four="Red" five="White"/>
      <Dropdown field="Clothing" one="Jacket" two="Jeans" three="Sweater" four="T-shirt" five="Dress"/>
      <DisplayImage sc="https://ftw.usatoday.com/wp-content/uploads/sites/90/2023/11/new-professor-layton-trailer.jpg?w=1000&h=600&crop=1"/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
