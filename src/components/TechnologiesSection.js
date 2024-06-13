// src/components/TechnologiesSection.js
import React from 'react';
import './TechnologiesSection.css';

const technologies = [
  { name: "java", icon: "fab fa-java" },
  { name: "ruby", icon: "fas fa-gem" },
  { name: "javascript", icon: "fab fa-js" },
  { name: "vuejs", icon: "fab fa-vuejs" },
  { name: "angular", icon: "fab fa-angular" },
  { name: "react", icon: "fab fa-react" },
  { name: "solidity", icon: "fab fa-solidity" },
  { name: "php", icon: "fab fa-php" },
  { name: "react-native", icon: "fab fa-react" },
  { name: "css", icon: "fab fa-css3" },
  { name: "node", icon: "fab fa-node-js" },
  { name: "swift", icon: "fab fa-swift" },
  { name: "html", icon: "fab fa-html5" },
  { name: "golang", icon: "fab fa-go" },
  { name: "kotlin", icon: "fab fa-kotlin" }
];

function TechnologiesSection() {
  return (
    <div className="technologies-section">
      <h2>TECHNOLOGIES</h2>
      <div className="technologies-container">
        {technologies.map((technology, index) => (
          <div className="technology-box" key={index}>
            <i className={technology.icon}></i>
            <span>{technology.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnologiesSection;
