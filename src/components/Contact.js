import React from "react";
import "../Styles/Contact.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <section className="Contact_section">
      <h2 className="section_heading">Contact</h2>

      <div className="contact_container">
        <div className="map_box">
          <header>
            <iframe 
              width="391"
              height="388"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=391&amp;height=388&amp;hl=en&amp;q=Vishwakarma%20institute%20of%20information%20technology,%20pune%20Pune+(My%20Current%20Location)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </header>
          <footer className="map_footer">
            <p>Say Hello!</p>
            <p>
              Contact:- +91 00000 00000 <br />
              Email:- shreyashchaple786@ojigmail.com
            </p>
          </footer>
        </div>
        <div className="contactForm">
  
          <ContactForm/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
