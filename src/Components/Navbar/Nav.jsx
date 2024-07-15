import "./Nav.css";
import React from 'react';
import logo from "/assets/Images/logo.png";
import {Link} from 'react-router-dom';
const Nav = () => {
  return (
    <nav className='Nav-section'>
            <img src={logo} alt="" />
            <ul className='list'>
                <li className="nav-item">
                    <Link to = '/Project1'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to = '/Project1/Openhouses'>Openhouses</Link>
                </li>
                <li className="nav-item">
                <Link to = '/Project1/Projects'>Projects</Link>
                </li>
                <li className="nav-item">
                <Link to = '/Project1/Pmang'>Property Management</Link>
                </li>
                <li className="nav-item">
                <Link to = '/Project1/Tenants'>Tenants</Link>
                </li>
                <li className="nav-item">
                <Link to = '/Project1/ContactUs'>ContactUs</Link>
                </li>
            </ul>
    </nav>
  )
}

export default Nav