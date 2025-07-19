import React from 'react';
import { useEffect } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaArrowUp
} from 'react-icons/fa';
import "../index.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
      <div className="company-info">
          <h4 className="text-lg font-semibold text-white mb-4">DESIGN NODE</h4>
          <p className="text-sm mb-2">Every spark begins with a question. Every change begins with a choice. At Gaalaxy, we don’t just serve we lead, we learn, and we lift others as we rise. Because in this universe of youth, passion, and purpose, we aren’t just part of the change. We are the force behind it.</p>
        </div>

        <div className="footer-links">
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="list-none space-y-2">
            <li><a href="#About" className="hover:text-primary">About Us</a></li>
            <li><a href="#Services" className="hover:text-primary">Services</a></li>
            <li><a href="#Project" className="hover:text-primary">Works</a></li>
            <li><a href="#Contact" className="hover:text-primary">Contact Us</a></li>
          </ul>
        </div>

        <div className="social-links">
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-primary" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary" aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary" aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-300 hover:text-primary" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom"> {/* Container for copyright and back to top */}
        <div className="text-center py-4 border-t border-gray-700 text-sm copyright-center"> {/* New class */}
          <p>DESIGN NODE &copy; {new Date().getFullYear()}. Crafted with passion.</p>
        </div>
        <button onClick={scrollToTop} className="back-to-top-right"> {/* New class name */}
          <FaArrowUp />
          <span>Back Top</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;