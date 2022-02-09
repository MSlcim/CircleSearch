import './App.css';
import React from 'react';
import {useEffect, useState} from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './Components/View/Home/HomePage';
import LoginPage from './Components/View/Login/LoginPage';
import TopPannel from './Components/TopPannel/TopPannel';
import RegisterPage from './Components/View/Register/RegisterPage';

function App() {
  return (
    <div className="App">
    <TopPannel/>
    <div className='wrapper'>
    <div className='left_sidebar'>
      left_sidebar
    </div>
    <div className="main_container">
    <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
    </Routes>
    </div>
    <div className='right_sidebar'>
      right_sidebar
    </div>
    </div>
      </div>
  );
}

export default App;

