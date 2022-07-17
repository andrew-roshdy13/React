// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//////////////start my app
// import  React from 'react';
// import  ReactDOM  from 'react-dom';
// import { BrowserRouter } from "react-router-dom";
// import { Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
//import Product from './product';
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
// import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import ShoppingCart from './components/shoppingCard';
//import { Component } from 'react';
//////un comment


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// import Product from "./product";
// import ShoppingCart from "./components/shoppingCart";
import Appp from "./components/appp";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./index.css";
import '../node_modules/react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <BrowserRouter>
    <Appp />
  </BrowserRouter>,
  document.querySelector("#root")
);