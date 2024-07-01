import "./Nav.css";
import React from 'react';
import logo from "../../images/logo.png";
import {Link} from 'react-router-dom';
const Nav = () => {
  return (
    <nav className='Nav-section'>
            <img src={logo} alt="" />
            <ul className='list'>
                <li className="nav-item">
                    <Link to = '/Project_1'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to = '/Project_1/Openhouses'>Openhouses</Link>
                </li>
                <li className="nav-item">
                <Link to = '/Project_1/Projects'>Projects</Link>
                </li>
                <li className="nav-item">
                <Link to = '/Project_1/Pmang'>Property Management</Link>
                </li>
                <li className="nav-item">
                <Link to = '/Project_1/Tenants'>Tenants</Link>
                </li>
                <li className="nav-item">
                <Link to = '/Project_1/ContactUs'>ContactUs</Link>
                </li>
            </ul>
    </nav>
  )
}

export default Nav