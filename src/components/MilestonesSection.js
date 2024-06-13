import React from 'react';
import './MilestonesSection.css';

const milestones = [
  { title: "Experience", value: "6+ YEARS EXPERIENCE", icon: "fas fa-chart-line" },
  { title: "Website", value: "100+ WEBSITE BUILT", icon: "fas fa-globe" },
  { title: "Location", value: "10+ SERVICE LOCATION", icon: "fas fa-map-marker-alt" },
  { title: "Servers", value: "35+ HAPPY CUSTOMERS", icon: "fas fa-server" }
];

function MilestonesSection() {
  return (
    <div className="milestones-section">
      <h2>MILESTONES</h2>
      <div className="milestones-container">
        {milestones.map((milestone, index) => (
          <div className="milestone" key={index}>
            <i className={milestone.icon}></i>
            <h3>{milestone.title}</h3>
            <p>{milestone.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MilestonesSection;
