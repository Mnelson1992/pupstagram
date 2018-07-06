import React, { Component } from 'react';
import Home from './Home'
import Navbar from './Navbar'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ImagesPage from '../containers/ImagesPage';



const App = () =>
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/images" component={ImagesPage} />
      </div>
    </Router>


export default App;
