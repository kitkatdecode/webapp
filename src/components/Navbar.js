import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-wrapper orange accent-4">
      <div className="container">
        <Link exact to="/">My Planner</Link>
        <ul className="right">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to='/profile'>Profile</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}

export default Navbar;