import React from "react";
import Nav from "../../Components/Navbar/Nav";
import Footer from "../../Components/Footer/Footer";
import './Openhouses.css'
import Props from "../../Components/Props/Props";
import info_data from '../../data/Info';


const Openhouses = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="Openhouses">
        <div className="Opentop">
          <h3>Open Houses</h3>
        </div>
        <div className="Open-cont">
          <p>
            In the residential, rural, and commercial sectors, our team of
            experts offers you unmatched advise, whether you're buying an office
            space, renting a home, or renting out your current space. Finding
            the perfect rental home is a top priority for our staff at <span>Easy
            Crets</span>. In due time, the piece of land you choose will be your
            permanent residence. That being the case, it's tailor-made for you.
            Thousands of London property transactions are handled by <span>Easy
            Crets</span> annually. 
            </p>
            <p>We are positive that you will notice significant
            differences between our services and those of other real estate
            agents once you hire us. We get that renters are looking for places
            to live that will serve as more than just a roof over their heads.
            In the long run, they want this location to serve as their home and
            a gathering spot for their loved ones. 
            </p>
            <p>All of our recommendations
            are forthright and honest. We make sure you have all the information
            you need to make the right choices by sharing our knowledge and
            resources during each negotiation. With hundreds of properties
            posted every day, we can help you find the perfect home, whether
            it's an apartment in the city, a townhouse in the suburbs, or a
            country estate. 
            </p>
            <p>We take into account not just the current market
            conditions but also our extensive local knowledge and expertise in
            order to arrive at an accurate valuation of your rental property.
            Our one and only goal is to earn your trust to the point that you
            will refer us to your friends and family and use our services for
            all of your real estate transactions. 
            </p>
            <p>In addition to waterfront,
            short-stay, and equestrian properties, our specialized rental
            searches cover a wide range of other types of properties. Your
            property's worth includes all the unique features that make it a
            home. We have a large corporate customer database and a huge network
            of tenants all over the world, so when your property is advertised
            to them, they will see more than just the monthly price. A photo of
            themselves in their future house will be shown to them. </p>
            <p>Send us an
            email or give us a call if you need assistance finding a rental
            property or if you would like to get a free evaluation.
          </p>
        </div>
        <Props data={info_data}/>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Openhouses;
