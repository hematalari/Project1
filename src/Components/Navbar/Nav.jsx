import "./Nav.css";
import React from 'react';
import logo from "../../assets/Easy crets images/logo.png";
import {Link} from 'react-router-dom';
const Nav = () => {
  return (
    <nav className='Nav-section'>
            <img src={logo} alt="" />
            <ul className='list'>
                <li className="nav-item">
                    <Link to = '/Home'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to = '/Openhouses'>Openhouses</Link>
                </li>
                <li className="nav-item">
                <Link to = '/Projects'>Projects</Link>
                </li>
                <li className="nav-item">
                <Link to = '/Pmang'>Property Management</Link>
                </li>
                <li className="nav-item">
                <Link to = '/Tenants'>Tenants</Link>
                </li>
                <li className="nav-item">
                <Link to = '/ContactUs'>ContactUs</Link>
                </li>
            </ul>
    </nav>
  )
}

export default Nav