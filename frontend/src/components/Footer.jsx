import React from 'react';
import './footer.css';
import { FiPhone } from "react-icons/fi";
import { FiMail, FiMapPin } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdAccessible } from "react-icons/md";
import './header.css';
import logo from '../assets/logobg.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section logo">
                    <div className="logo-container">

                        <a href="/"><img src={logo} alt="Logo" className="logo" /></a>
                        <h3>MY SPARES GUY</h3>
                    </div>
                    <a href="https://www.google.com/maps/place/Ngara,+Nairobi" target="_blank" rel="noopener noreferrer"><FiMapPin /> Find Us</a>
                </div>
                {/* About Section */}
                <div className="footer-section cities">
                    <h2>Top Cities</h2>
                    <ul>
                        <li>Kenya</li>
                        <li>Rwanda</li>
                        <li>Uganda</li>
                        <li>Tanzania</li>
                    </ul>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">About</a></li>
                        <li><a href="/about">FAQ</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div className="footer-section social">
                    <h2>Subscribe to newsletter</h2>
                    <div className="social-icons">
                        <p>Get $10 off your first order. Stay updated with our latest.</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Email..." required />
                            <button type="submit"><IoIosArrowRoundForward className='icon' /></button>
                        </form>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="footer-section social">
                    <h2>Contact Us</h2>
                    <div className="social-icons">
                        <a href="tel:+2547123456" target="_blank" rel="noopener noreferrer">
                            <FiPhone /> +2547123456
                        </a>
                        <a href="mailto:apbcafricait@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FiMail /> apbcafricait@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            <hr className="footer-divider" />

            <div className="footer-bottom">
                <p>&copy; 2024 My Spares Guy. All rights reserved.</p>
                <p>Privacy policy</p>
                <p>Terms & Conditions</p>
                <p>ACCESSIBILITY<MdAccessible /></p>
            </div>
        </footer>

    );
};

export default Footer;
