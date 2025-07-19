import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UpcomingEvents from './components/UpcomingEvents';
import AboutUs from './components/About';
import Member from './components/Members';
import PrayerSection from './components/PrayerTest';
import Events from './components/Events';
import Socials from "./components/Social";
import FAQSection from './components/faqs'
import Contact from'./components/ContactUs';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <UpcomingEvents />
      <AboutUs />
      <Member />
      <PrayerSection />
      <Events />
      <Socials />
      <FAQSection />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
