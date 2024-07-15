import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";
import Footer1 from "../Footer1/Footer1";


const Footer = () => {
  return (
    <>
    <div className="Footer">
      <div className="Aboutus">
        <h3>Company</h3>
        <ul className="menus">
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Openhouses">Openhouses</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
          <li>
            <Link to="/Pmang">Property Management</Link>
          </li>
          <li>
            <Link to="/Tenants">Tenants</Link>
          </li>
          <li>
            <Link to="/ContactUs">ContactUs</Link>
          </li>
        </ul>
      </div>
      <div className="Ourprojects">
        <h3>Projects</h3>
        <ul>
          <li>project 1</li>
          <li>project 2</li>
          <li>project 3</li>
          <li>project 4</li>
          <li>project 5</li>
        </ul>
      </div>
      <div className="Easycrets">
        <h3>Easy Crets</h3>
        <p>
          <span>Easy Crets</span> ranks among the top in the UK. As one of the
          most popular real estate agent websites in the nation, we help tens of
          thousands of people every year with property transactions.
        </p>
      </div>
      <div className="reachus">
        <h3>Reach us</h3>
        <h4>Location</h4>
        <p>Office No: 8, 292 - 294, Plashet Grove,
        London. E6 1DQ. </p>
        <br></br>
        <p>Email: contact@rkhpservices.co.uk</p>
        <br></br>
        <p> Phone: +44 80 028 84785</p>
      </div>
    </div>
    <Footer1 />
    </>
  );
};

export default Footer;
