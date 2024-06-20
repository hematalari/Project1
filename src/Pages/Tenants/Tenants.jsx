import React from "react";
import Nav from "../../Components/Navbar/Nav";
import Footer from '../../Components/Footer/Footer'
import './Tenants.css'
import Feedback from "../../Components/Feedback/Feedback";
import feed_data from "../../data/Feedback";


const Tenants = () => {
  return (
    <div>
    <Nav></Nav>
    <div className="Tenants">
      <h3>Tenants</h3>
      <p>
        Even if you have experience renting properties before, there can be
        instances when the process is confusing and irritating. Easy Crets
        does everything in its power to make the procedure easy and fast for
        the tenants. Your needs as a tenant are important to us, and we know
        how difficult it can be to locate the perfect place for you at a price
        you can afford. Think about things like the size and type of property
        you require, the date you must relocate, and your budget for rent. To
        let us know all about your needs, simply click the "Register" button
        on our website or send us an email at Contact Us.
      </p>
      <p>
        Now that we know exactly what you're looking for, we can access all
        the properties that fit the bill. A large number of landlords need our
        attention. Some of them have been with us for a long time, so we are
        familiar with their needs. We make it our business to help renters
        locate suitable housing. When you apply for the property, our staff
        can also take into consideration the amount you can afford to pay each
        month if you'd like. Our local representative is happy to talk to you
        about any issues you may have. On your behalf, we will verify the cost
        and let you know if we have any concerns.
      </p>
      <p>
        We can put you in touch with a guarantor if that becomes necessary.
        This individual agrees to pay the rent on your behalf in the event
        that you are unable to do so for any reason. Even though the landlord
        isn't always there, we normally go along and check out the property.
        Even when we encourage landlords to be flexible, they may still insist
        on specific viewing times. We frequently have keys and can get you
        inside properties that are a perfect fit for your requirements. It
        will save you time in the end if you get everyone's input while making
        decisions about the property. Do not hesitate to make an offer if you
        find the property suitable; otherwise, someone else may be able to
        snag it and leave on the same day! To remove the home from the market
        while we investigate and negotiate with the landlord, a deposit is
        required.
      </p>
    </div>
    <Feedback Feed={feed_data}/>
    <Footer />
  </div>
  );
};

export default Tenants;