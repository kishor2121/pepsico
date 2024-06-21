// HomePage.js
import React from 'react';
import './HomePage.css';
import Header from './Header'; // Import the Header component
import homeImage from '../assets/home.jpg'; // Import the home image
import ImageCarousel from './ImageCarousel'; // Import the ImageCarousel component

function HomePage() {
  const text = {
    heading: "Create more smiles with every sip and every bite",
    description: []
  };

  return (
    <div className="home-page">
      <div className="background-image" style={{ backgroundImage: `url(${homeImage})` }}>
        <Header /> {/* Include Header component */}
        {/* Content overlay */}
        <div className="content">
          <h1>{text.heading}</h1>
          {text.description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
          {text.description.length > 0 && <hr />} {/* Add horizontal line if there are descriptions */}
        </div>
      </div>
      <ImageCarousel /> {/* Include ImageCarousel component below the background image */}
    </div>
  );
}

export default HomePage;
