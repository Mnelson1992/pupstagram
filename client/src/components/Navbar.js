import React from 'react';
import { NavLink } from 'react-router-dom';


const link = {
  width: '100px',
  padding: '10px',
  margin: '0 6px 6px',
  background: 'whitesmoke',
  textDecoration: 'none',
  color: 'navy'
}

const Navbar = () =>
  <div>
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        border: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/images"
      exact style={link}
      activeStyle={{
        border: 'darkblue'
      }}
    >Images</NavLink>
    <NavLink
      to="/images/new"
      exact
      style={link}
      activeStyle={{
        border: 'darkblue'
      }}
    >Add A Pic of A Pup</NavLink>

  </div>;





export default Navbar;
