import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import InsyntrixLogo from '../assets/Insyntrix-logo-1.svg';
import bluePanes from '../assets/blue-panes.svg';
import '../styles/Footer.scss';
import { ScrollReveal } from './ScrollReveal';

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <ScrollReveal animation="fadeInUp">
                        <div className="footer-brand">
                            <img src={InsyntrixLogo} alt="Insyntrix" className="footer-logo" style={{ height: '40px', marginBottom: '1rem' }} />
                            <p>Start Your Growth Journey With Us.</p>
                            <div className="social-links">
                                <a href="#"><FaLinkedin /></a>
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FaFacebook /></a>
                            </div>
                        </div>
                    </ScrollReveal>

                    <div className="footer-links">
                        <ScrollReveal animation="fadeInUp" delay="0.1s">
                            <div className="link-column">
                                <h4>Company</h4>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="fadeInUp" delay="0.2s">
                            <div className="link-column">
                                <h4>Services</h4>
                                <ul>
                                    <li><a href="#">Growth Strategy</a></li>
                                    <li><a href="#">Executive Search</a></li>
                                    <li><a href="#">Data Analytics</a></li>
                                    <li><a href="#">Market Research</a></li>
                                </ul>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="fadeInUp" delay="0.3s">
                            <div className="link-column">
                                <h4>Legal</h4>
                                <ul>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms of Service</a></li>
                                    <li><a href="#">Cookie Policy</a></li>
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Intryx Inc. All rights reserved.</p>
                </div>
            </div>
            {/* Decorative background image */}
            <img src={bluePanes} alt="" className="footer-decoration" />
        </footer>
    );
};
