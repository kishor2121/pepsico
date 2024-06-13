import React from 'react';
import './App.css';
import Header from './components/Header';
// import Footer from './components/Footer';
import HomePage from './components/HomePage';
import './components/HomePage.css'; 
import ServicesSection from './components/ServicesSection';
import IndustriesSection from './components/IndustriesSection';
import TechnologiesSection from './components/TechnologiesSection';
import ClientsSection from './components/ClientsSection';
import GetInTouchForm from './components/GetInTouchForm';
import TestimonialsSection from './components/TestimonialsSection';
import MilestonesSection from './components/MilestonesSection';
import Services from './components/Services';
import FooterSection from './components/FooterSection';


// import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <ServicesSection />
      <IndustriesSection/>
      <TechnologiesSection/>
      <ClientsSection/>
      <GetInTouchForm/>
      <TestimonialsSection/>
      <MilestonesSection/>
      <Services/>
      <FooterSection/>
    </div>
  );
}

export default App;
