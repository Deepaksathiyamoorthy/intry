import React from 'react';
import '../styles/Navbar.scss';
import logo from '../assets/Insyntrix-logo-1.svg';
import ScheduleMeetingButton from './ScheduleMeetingButton/ScheduleMeetingButton';

export const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <div className="logo">
                    {/* Placeholder for logo */}
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <img src={logo} alt="Intryx Logo" style={{ height: '1em' }} />
                        Intryx
                    </span>
                </div>
                <ul className="nav-links">
                    <li><a href="/#home">Home</a></li>
                    <li><a href="/#solutions">Our Expertise</a></li>
                    <li><a href="/#about">About Us</a></li>
                    <li><a href="/#team">Our Team</a></li>
                    <li><a href="/#testimonials">Testimonials</a></li>
                    <li><a href="/#case-studies">Case Studies</a></li>
                </ul>
                <ScheduleMeetingButton buttonText="Get Started" />
            </div >
        </nav >
    );
};
