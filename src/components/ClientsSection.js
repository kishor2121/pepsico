// src/components/ClientsSection.js
import React from 'react';
import './ClientsSection.css';

const clients = [
    { name: "Vi Assurance", icon: "fas fa-shield-alt" },
    { name: "AR Power", icon: "fas fa-bolt" },
    { name: "Whytboard", icon: "fas fa-chalkboard" },
    { name: "SettleBay", icon: "fas fa-anchor" },
    { name: "Bizex", icon: "fas fa-briefcase" },
    { name: "Serv Horizon Inc", icon: "fas fa-users-cog" },
    { name: "NurseryWord", icon: "fas fa-seedling" },
    { name: "Lacca", icon: "fas fa-palette" },
    { name: "Globel Service", icon: "fas fa-globe" },
    { name: "haymarket", icon: "fas fa-city" },
    { name: "Post", icon: "fas fa-envelope" },
    { name: "LegalWeek", icon: "fas fa-balance-scale" },
    { name: "Gor", icon: "fas fa-cogs" },
    { name: "CRN", icon: "fas fa-network-wired" },
    { name: "LightReading", icon: "fas fa-book-reader" },
    { name: "RenewPower", icon: "fas fa-solar-panel" },
    { name: "Petscape", icon: "fas fa-paw" },
    { name: "IndianRDA", icon: "fas fa-flag" },
  ];

function ClientsSection() {
  return (
    <div className="clients-section">
      <h2>OUR CLIENTS</h2>
      <div className="clients-container">
        {clients.map((client, index) => (
          <div className="client-box" key={index}>
            <i className={client.icon}></i>
            <p>{client.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientsSection;
