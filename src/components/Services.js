import React from 'react';
import './ServicesSection.css';

const services = [
  "SEO Services",
  "Search Engine Marketing",
  "Social Media Marketing",
  "Pay Per Click Management",
  "SEO Copywriting",
  "Digital Marketing",
  "Brand Consulting",
  "HR and Payroll Management Software",
  "Jewellery Software",
  "CRM Software",
  "Real Estate Software",
  "Inventory Management Software",
  "Hospital Management Software",
  "School Management Software",
  "Website Design",
  "Website Development",
  "CRM Software Development",
  "Software Development",
  "Educational Web Portal Development",
  "Restaurant Web Portal Development",
  "Health Care Portal Development",
  "Travel Portal Development",
  "Real Estate Portal Development",
  "E-commerce Website Development",
  "Mobile App Development",
  "Windows App Development",
  "Xamarin App Development",
  "Hybrid App Development",
  "Native App Development",
  "UI/UX Design",
  "Lead Management System"
];

function ServicesSection() {
  return (
    <div className="services-section">
      <h2>OUR SERVICES</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <p>{service}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
