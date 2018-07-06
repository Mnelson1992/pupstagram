import React, { Component } from 'react';
import Home from './Home'
import Navbar from './Navbar'
import {BrowserRouter as Router, Route} from 'react-router-dom';


const App = () =>

      <div className="App">
        <Home />
        <Navbar />
      </div>


export default App;
