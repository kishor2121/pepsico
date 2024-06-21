import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';
import homeImage1 from '../assets/7up.jpg';
import homeImage2 from '../assets/dew.jpg';
import homeImage3 from '../assets/team.png';
import ReadMoreContent from './ReadMoreContent';

const carouselData = [
  {
    image: homeImage1,
    heading: "Brands & Programs",
    description: "7UP® UNVEILS SUPER-DUPER SUMMER CAMPAIGN WITH RANBIR KAPOOR AND RASHMIKA MANDANNA",
    date: "Apr 15, 2024",
    link: "/read-more-1",
    additionalContent: `MOUNTAIN DEW®’S LATEST SUMMER CAMPAIGN WITH HRITHIK ROSHAN
    National, 01 April 2024: In a bid to take summer refreshment to new heights, 7UP® has launched its latest campaign, starring brand ambassadors Ranbir Kapoor and Rashmika Mandanna. Echoing the vibrancy of 'Super Duper Refresher,' the latest campaign unveils two spirited brand films. Tailored to reinforce 7UP® as the ultimate choice for a refreshing escape on blistering summer days, these films are celebration of fun and revitalization, transforming every moment into an invigorating experience.`
  },
  {
    image: homeImage2,
    heading: "Brands & Programs",
    description: "MOUNTAIN DEW®'S LATEST SUMMER CAMPAIGN WITH HRITHIK ROSHAN",
    date: "Apr 16, 2024",
    link: "/read-more-2",
    additionalContent: `7UP® UNVEILS SUPER-DUPER SUMMER CAMPAIGN WITH RANBIR KAPOOR AND RASHMIKA MANDANNA 
    National, 14 th March 2024: Mountain Dew®, launched its 2024 summer campaign today with a new storyline of purposeful courage, a story about overcoming fear to save a friend. The campaign features Mountain Dew’s brand ambassador Hrithik Roshan, who has been associated with the brand for over a decade and is as synonymous to the brand as the ‘Darr ke Aage Jeet Hai’ tagline. Staying true to Mountain Dew’s original style, the film is filled with thrilling stunts and lots of adrenaline making it an enjoyable watch.`
  },
  {
    image: homeImage3,
    heading: "Brands & Programs",
    description: "PEPSICO INDIA LAUNCHES ITS ICONIC HYDRATION BRAND GATORADE IN JAMMU & KASHMIR",
    date: "Jun 5, 2024",
    link: "/read-more-3",
    additionalContent: `Srinagar, 27 th May 2024: PepsiCo India is expanding its beverage offerings in Jammu & Kashmir with the launch of its iconic hydration brand, Gatorade® for the first time in the market. Gatorade® is known for its commitment to inspire young individuals to lead active lifestyles and reinstates the important role hydration plays in helping them unlock their full potential. Gatorade® will be available in Jammu & Kashmir in all three of its flavors: Blue Bolt, Orange, and Lemon.`
  }
];

function ImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAdditionalContent, setShowAdditionalContent] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000); // Change image and content every 5 seconds
    setIntervalId(timerId);

    return () => clearInterval(timerId);
  }, []);

  const handleReadMoreClick = () => {
    clearInterval(intervalId);
    setShowAdditionalContent(true);
  };

  const { image, heading, description, date, link, additionalContent } = carouselData[currentImageIndex];

  return (
    <div className="carousel-container">
      <div className="carousel-image-container">
        <img src={image} alt="carousel" className="carousel-image" />
      </div>
      <div className="carousel-content">
        <h2>{heading}</h2>
        <p>{description}</p>
        <p>{date}</p>
        {showAdditionalContent ? (
          <div>
            <p>{additionalContent}</p>
            <a href={link} className="read-more-button">Read less →</a>
          </div>
        ) : (
          <a href={link} className="read-more-button" onClick={handleReadMoreClick}>Read more →</a>
        )}
      </div>
    </div>
  );
}

export default ImageCarousel;
