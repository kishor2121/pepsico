// src/components/ServicesSection.js
import React from 'react';
import './ServicesSection.css';

const services = [
  {
    title: "SOFTWARE DEVELOPMENT",
    description: [
      "It is a process involving",
      "the creation, maintenance",
      "of applications,",
      "frameworks of software,",
      "design, programming,",
      "testing, and bug fixing."
    ],
    icon: "fas fa-laptop-code"
  },
  {
    title: "MOBILE APP DEVELOPMENT",
    description: [
      "It is the act of developing",
      "app suitable for mobile",
      "devices that involve",
      "writing software for small",
      "wireless computing devices."
    ],
    icon: "fas fa-mobile-alt"
  },
  {
    title: "WEBSITE DEVELOPMENT",
    description: [
      "It involves building and",
      "maintaining the websites;",
      "it makes the website look",
      "great, works quickly with",
      "firm user experience."
    ],
    icon: "fas fa-globe"
  },
  {
    title: "CRM SOFTWARE DEVELOPMENT",
    description: [
      "It is the tool or technique",
      "that helps companies",
      "make a healthy",
      "relationship with their",
      "customers by organizing",
      "the data."
    ],
    icon: "fas fa-users-cog"
  },
  {
    title: "UI / UX DESIGNING",
    description: [
      "It increases the user",
      "experience and customer",
      "satisfaction, which",
      "ultimately increases",
      "the number of customers,",
      "resulting in the growth",
      "of the business."
    ],
    icon: "fas fa-paint-brush"
  },
  {
    title: "DIGITAL MARKETING",
    description: [
      "It is a strategy that uses",
      "multiple channels to attract",
      "engage and convert customers",
      "online."
    ],
    icon: "fas fa-chart-line"
  }
];

function ServicesSection() {
  return (
    <div className="services-section">
      <h2>BRIDGING THE GAP BETWEEN BUSINESS AND TECHNOLOGY</h2>
      <h3>OUR SERVICES</h3>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <i className={service.icon}></i>
            <h4>{service.title}</h4>
            {service.description.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
