import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesCarousel from './components/ServicesCarousel';
import Testimonials from './components/Testimonials';
//import FAQAccordion from './components/FAQAccordion';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
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

export default App;
