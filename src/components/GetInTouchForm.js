// src/components/GetInTouchForm.js
import React, { useState } from 'react';
import './GetInTouchForm.css';
import contactImage from '../assets/get_in_touch.png'; // replace with the actual path to your image
import ReCAPTCHA from 'react-recaptcha';

function GetInTouchForm() {
  const [isVerified, setIsVerified] = useState(false);

  const handleRecaptcha = (response) => {
    setIsVerified(true);
  };

  return (
    <div className="get-in-touch">
      <div className="form-container">
        <h2>Share Your Query And Contact</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone No</label>
            <input type="text" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <div className="form-group">
            <ReCAPTCHA
              sitekey="YOUR_RECAPTCHA_SITE_KEY"
              onChange={handleRecaptcha}
            />
          </div>
          <button type="submit" disabled={!isVerified}>Submit</button>
        </form>
      </div>
      <div className="form-image">
        <h2>Get In Touch</h2>
        <img src={contactImage} alt="Contact" />
      </div>
    </div>
  );
}

export default GetInTouchForm;
