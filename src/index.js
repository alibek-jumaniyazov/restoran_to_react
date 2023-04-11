import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './styles/app.css'
import './styles/home.css'
import './styles/pizza.css'
import './styles/header.css'
import { type } from '@testing-library/user-event/dist/type';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />  
  </BrowserRouter>
);


// let a = prompt()

// console.log(isNaN(a) && /\d/.test(a))

