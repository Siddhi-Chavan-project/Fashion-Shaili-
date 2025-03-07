import React from "react";
import "../../styles/Footer.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle navigation
  const handleNavigate = (path, event) => {
    event.preventDefault(); // Prevent default anchor tag behavior
    navigate(path); // Programmatically navigate
  };

  return (
    <div className="footer">
      <div className="text-white p-10">
        <div className="container mx-auto footer-grid text-sm">
          {/* Popular Categories */}
          <div className="footer-column">
            <h2 className="font-bold text-lg mb-3">POPULAR CATEGORIES</h2>
            <ul className="space-y-2">
              <li><a href="/wedding" onClick={(e) => handleNavigate("/category/wedding-collection-women", e)}>Wedding Collection</a></li>
              <li><a href="/new-arrivals" onClick={(e) => handleNavigate("/category/indo-western-womens", e)}>New Arrivals</a></li>
              <li><a href="/kurta-suit" onClick={(e) => handleNavigate("/category/ethinics-women", e)}>Kurta Suit Sets</a></li>
              <li><a href="/dresses" onClick={(e) => handleNavigate("/category/western-wear-womens", e)}>Dresses</a></li>
             
              <li><a href="/lehenga" onClick={(e) => handleNavigate("/category/lehenga-choli", e)}>Lehenga Choli Sets</a></li>
              <li><a href="/gown" onClick={(e) => handleNavigate("/category/gowns", e)}>Gowns</a></li>
             
            </ul>
          </div>

          {/* Discover */}
          <div className="footer-column">
            <h2 className="font-bold text-lg mb-3">DISCOVER</h2>
            <ul className="space-y-2">
              <li><a href="/about" onClick={(e) => handleNavigate("/about", e)}>About Us</a></li>
              <li><a href="/media" onClick={(e) => handleNavigate("/media", e)}>Media / Articles</a></li>
              <li><a href="/sustainability" onClick={(e) => handleNavigate("/sustainability", e)}>Sustainability</a></li>
 
            </ul>
          </div>

          {/* Customer Support */}
          <div className="footer-column">
            <h2 className="font-bold text-lg mb-3">CUSTOMER SUPPORT</h2>
            <ul className="space-y-2">
              <li><a href="/terms" onClick={(e) => handleNavigate("/terms", e)}>Terms & Conditions</a></li>
              <li><a href="/privacy-policy" onClick={(e) => handleNavigate("/policy", e)}>Privacy Policy</a></li>
              <li><a href="/contact" onClick={(e) => handleNavigate("/contact", e)}>Contact Us</a></li>
            </ul>
          </div>

          {/* Customer Care Info */}
          <div className="footer-bottom">
            <h2 className="font-bold text-lg mt-4">CUSTOMER CARE INFO</h2>
            <p>📅 Mon to Sat - 10:00 AM to 7:00 PM (IST)</p>
            <p>📞 9123456788</p>
            <p>📧 crm@fashionshaili.com</p>
            <p>📍 G93, Andheri industrial Area, Mumbai, Maharashtra - 400093</p>

            {/* Social Media Links */}
            <h2 className="font-bold text-lg mt-4">STAY CONNECTED</h2>
            <div className="flex space-x-3 mt-2">
              <a href="https://facebook.com" target="_blank"><FaFacebook size={20} /></a>
              <a href="https://instagram.com" target="_blank"><FaInstagram size={20} /></a>
              <a href="https://twitter.com" target="_blank"><FaTwitter size={20} /></a>
              <a href="https://pinterest.com" target="_blank"><FaPinterest size={20} /></a>
              <a href="https://youtube.com" target="_blank"><FaYoutube size={20} /></a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-6 border-t border-gray-600 pt-4">
          <p>&copy; 2025 Fashion Shaili. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
