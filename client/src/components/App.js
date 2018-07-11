import React, { Component } from 'react';
import Home from './Home'
import Navbar from './Navbar'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ImagesPage from '../containers/ImagesPage';
import '../App.css';




const App = () =>
    <Router>
      <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
        <Route exact path="/" component={Home} />
        <Route path="/images" component={ImagesPage} />
      </div>
    </Router>


export default App;
