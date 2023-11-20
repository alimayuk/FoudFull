import React from 'react';
import './ContactComp.css';

const ContactComp = () => {
  return (
    <div className="contact">
     <div className="container">
     <form className="contactForm">
        <div className="names">
        <div className="formGroup">
          <label htmlFor="formName">Name</label>
          <input type="text" id="formName" placeholder="Your Name" />
        </div>

        <div className="formGroup">
          <label htmlFor="formSurname">Surname</label>
          <input type="text" id="formSurname" placeholder="Your Surname" />
        </div>
        </div>

        <div className="formGroup">
          <label htmlFor="formEmail">Email</label>
          <input type="email" id="formEmail" placeholder="Your Email" />
        </div>

        <div className="formGroup">
          <label htmlFor="formMessage">Message</label>
          <textarea
            id="formMessage"
            cols="30"
            rows="5"
            placeholder="Your Message"
          />
        </div>

        <button type="submit">Send Message</button>
      </form>
     </div>
    </div>
  );
};

export default ContactComp;
