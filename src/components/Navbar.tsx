import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import '../styles/Navbar.scss';
import logo from '../assets/Insyntrix-logo-1.svg';
import ScheduleMeetingButton from './ScheduleMeetingButton/ScheduleMeetingButton';

export const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileExpertiseOpen, setIsMobileExpertiseOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsMobileExpertiseOpen(false);
    };

    const toggleMobileExpertise = () => {
        setIsMobileExpertiseOpen(!isMobileExpertiseOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setIsMobileExpertiseOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <div className="logo">
                    <Link to="/" className="logo-link">
                        <img src={logo} alt="" className="logo-img" />
                        <span className="logo-text">Intryx</span>
                    </Link>
                </div>

                {/* Desktop Links */}
                <ul className="nav-links">
                    <li><a href="/#home">Home</a></li>
                    <li
                        className="dropdown-item"
                        ref={dropdownRef}
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <span className="dropdown-trigger">
                            Our Expertise <FaChevronDown className="chevron-icon" />
                        </span>
                        <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                            <li><Link to="/daas-consulting">DaaS Consulting</Link></li>
                            <li><Link to="/executive-hire">Executive Staffing</Link></li>
                            <li><Link to="/market-launch">Go-To-Market &
Growth Systems</Link></li>
                        </ul>
                    </li>
                    <li><a href="/#about">About Us</a></li>
                    <li><a href="/#team">Our Team</a></li>
                    <li><a href="/#testimonials">Testimonials</a></li>
                    <li><a href="/#case-studies">Case Studies</a></li>
                </ul>

                <div className="desktop-btn">
                    <ScheduleMeetingButton buttonText="Get Started" />
                </div>

                {/* Hamburger Icon */}
                <div className="hamburger" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul>
                        <li onClick={closeMobileMenu}><a href="/#home">Home</a></li>
                        <li className="mobile-dropdown">
                            <div className="mobile-dropdown-trigger" onClick={toggleMobileExpertise}>
                                Our Expertise <FaChevronDown className={`chevron-icon ${isMobileExpertiseOpen ? 'open' : ''}`} />
                            </div>
                            <ul className={`mobile-submenu ${isMobileExpertiseOpen ? 'open' : ''}`}>
                                <li onClick={closeMobileMenu}><Link to="/daas-consulting">DaaS Consulting</Link></li>
                                <li onClick={closeMobileMenu}><Link to="/executive-hire">Executive Hire</Link></li>
                                <li onClick={closeMobileMenu}><Link to="/market-launch">Market Launch</Link></li>
                            </ul>
                        </li>
                        <li onClick={closeMobileMenu}><a href="/#about">About Us</a></li>
                        <li onClick={closeMobileMenu}><a href="/#team">Our Team</a></li>
                        <li onClick={closeMobileMenu}><a href="/#testimonials">Testimonials</a></li>
                        <li onClick={closeMobileMenu}><a href="/#case-studies">Case Studies</a></li>
                    </ul>
                    <div className="mobile-btn-wrapper" onClick={closeMobileMenu}>
                        <ScheduleMeetingButton buttonText="Get Started" />
                    </div>
                </div>
            </div >
        </nav >
    );
};
