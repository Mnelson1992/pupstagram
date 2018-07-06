import React from 'react';
import { NavLink } from 'react-router-dom';


const link = {
  width: '100px',
  padding: '10px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white'
}

const Navbar = () =>
  <div>
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/images"
      exact style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Images</NavLink>
    <NavLink
      to="/images/new"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Add A Pic of A Pup</NavLink>

  </div>;





export default Navbar;
