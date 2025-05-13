import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesCarousel from './components/ServicesCarousel';
import Testimonials from './components/Testimonials';
//import FAQAccordion from './components/FAQAccordion';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesCarousel />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
