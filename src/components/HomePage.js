// HomePage.js
import React, { useState, useEffect } from 'react';
import './HomePage.css';
import homeImage from '../assets/home.jpg'; // Import the home image

function HomePage() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    {
      heading: "APPLICATION DEVELOPMENT",
      description: [
        "We provide full-cycle software development service",
        "encompassing planning, requirements definition, design and",
        "prototyping, software development, testing, deployment and",
        "application maintenance."
      ]
    },
    {
      heading: "ANALYTICAL REPORTING",
      description: [
        "Acquiring and utilising accurate information in the form of",
        "analytical data is fundamental to many. We at Techasoft give",
        "consistent reporting that incorporates analysis of various",
        "factors and performance based on the results."
      ]
    },
    {
      heading: "SOFTWARE ROBUSTNESS",
      description: [
        "We help companies to focus on core business by taking over",
        "complete responsibility. We provide both black-box and",
        "white-box testing support on demand."
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTextIndex((textIndex + 1) % texts.length);
    }, 5000); // Change text every 5 seconds

    return () => clearTimeout(timer);
  }, [textIndex]);

  return (
    <div className="home-page">
      <div className="background-image" style={{backgroundImage: `url(${homeImage})`}}>
        {/* Content overlay */}
        <div className="content">
          <h1>{texts[textIndex].heading}</h1>
          {texts[textIndex].description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          <hr /> {/* Add horizontal line after each description */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
