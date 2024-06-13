// src/components/IndustriesSection.js
import React from 'react';
import './IndustriesSection.css';

const industries = [
  { name: "Technology", icon: "fas fa-microchip" },
  { name: "E-commerce", icon: "fas fa-shopping-cart" },
  { name: "Banking", icon: "fas fa-university" },
  { name: "Logistic & Shipping", icon: "fas fa-shipping-fast" },
  { name: "Hospital", icon: "fas fa-hospital" },
  { name: "Travel", icon: "fas fa-plane" },
  { name: "Education", icon: "fas fa-book" },
  { name: "Manufacturing", icon: "fas fa-industry" }
];

function IndustriesSection() {
  return (
    <div className="industries-section">
      <h2>INDUSTRIES</h2>
      <div className="industries-container">
        {industries.map((industry, index) => (
          <div className="industry-item" key={index}>
            <i className={`industry-icon ${industry.icon}`}></i>
            <p className="industry-name">{industry.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndustriesSection;
