import React from 'react';
import './Header.css';
import logo from '../assets/logo.png'; // Import your logo image
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook-icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="twitter-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="instagram-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="youtube-icon">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="contact-info">
          <span className="phone-info"><i className="fas fa-phone"></i> 08026590320</span>
          <span className="email-info"><i className="fas fa-envelope"></i> sales@vikas.com</span>
        </div>
      </div>
      <div className="main-header">
        <div className="logo-container">
          <img src={logo} alt="Company Logo" className="company-logo" />
          <div className="logo-text">
            <h4>VIKAS</h4>
            <h7>Technology pvt ltd</h7>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="@home">HOME</a></li>
            <li><a href="@contact us">CONTACT US</a></li>
            <li><a href="@news">NEWS</a></li>
            <li><a href="@products">PRODUCT</a></li>
            <li><a href="@clients">CLINETS</a></li>
            <li><a href="@technology">TECHNOLOGY</a></li>
            <li><a href="@services">SERVICES</a></li>
            <li><a href="@contact us">BLOGS</a></li>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
