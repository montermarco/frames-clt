import React from 'react';
import { Link } from 'react-router-dom';
import About from './About'

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li><Link to="/projects" style={{ textDecoration: 'none' }}>home</Link></li>
        <li><Link to="/graphics" style={{ textDecoration: 'none' }}>graphics</Link></li>
        <li><Link to="/motion" style={{ textDecoration: 'none' }}>motions</Link></li>
        <li><Link to="/video" style={{ textDecoration: 'none' }}>video</Link></li>
        <About/>
    </ul>
    </nav>
  )
}

export default navbar;