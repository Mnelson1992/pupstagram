import React, { Component } from 'react';
import Home from './Home'
import Navbar from './Navbar'
import {BrowserRouter as Router, Route} from 'react-router-dom';


const App = () =>
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />

      </div>
    </Router>


export default App;
