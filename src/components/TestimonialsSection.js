import React, { useState } from 'react';
import './TestimonialsSection.css';

const testimonials = [
  { text: [
    "delivers services on time with",
    "no compromise in quality. Analytical",
    "skills and responsiveness are the",
    "quality that I like the most. Great",
    "service and support!"], author: "Nishant Kumar", stars: 5 },
  { text: ["We are very satisfied ",
          "and happy to have found",
          "Vikas Technology as our",
          "development partner. They",
          "are true professionals"], author: "Bhuvan Patil", stars: 5 },
  { text: ["I am very impressed by the",
          "quality of the team working",
          "on our project and the team",
          "displays a real understanding",
          "of our issues."], author: "Nikhil Kumar", stars: 5 },
  { text: ["I like the professionalism Vikas Technological",
          "Pvt Ltd has and the company's attentive nature.",
          "They deliver the product on time."], author: "Emily Davis", stars: 5 },
];

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevTestimonial = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="testimonials-section">
      <h2>TESTIMONIALS</h2>
      <div className="testimonials-container">
        <button className="nav-button" onClick={prevTestimonial}>&lt;</button>
        <div className="testimonials">
          {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <div className="stars">
                {'★'.repeat(testimonial.stars) + '☆'.repeat(5 - testimonial.stars)}
              </div>
              {testimonial.text.map((line, lineIndex) => (
                <p key={lineIndex}>{line}</p>
              ))}
              <h4>- {testimonial.author}</h4>
            </div>
          ))}
        </div>
        <button className="nav-button" onClick={nextTestimonial}>&gt;</button>
      </div>
    </div>
  );
}

export default TestimonialsSection;
