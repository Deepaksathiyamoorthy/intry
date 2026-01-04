import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheck, FaBuilding, FaUserTie, FaHandshake, FaChartLine } from 'react-icons/fa';
import heroStaffing from '../assets/hero-staffing.png';
import staffingIcon from '../assets/staffing-icon.png';
import industry1 from '../assets/industry-1.png';
import industry2 from '../assets/industry-2.png';
import industry3 from '../assets/industry-3.png';
import industry4 from '../assets/industry-4.png';
import clientRec from '../assets/client-rec.png';
import centerCollaboration from '../assets/center-collaboration.png';
import '../styles/ExecutiveHire.scss';
import { ScrollReveal } from '../components/ScrollReveal';

export const ExecutiveHire = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="executive-hire">
            <div className="container">
                <Link to="/" className="back-link">
                    <FaArrowLeft /> Go Back
                </Link>

                <ScrollReveal animation="fadeInUp" delay="0.1s">
                    <div className="page-header">
                        <div className="sparkle-container">
                            <img src={staffingIcon} alt="Icon" className="sparkle-img" />
                        </div>
                        <h1>Executive Staffing & Leadership Hiring</h1>
                        <p className="meta">
                            Finding the right leaders is one of the biggest challenges for any organization. In this article, we explore how Intryx helps companies hire smarter through strategic, culture-driven, and data-backed staffing models designed for long-term success.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="fadeInUp" delay="0.2s">
                    <div className="hero-image">
                        <img src={heroStaffing} alt="Executive Meeting" />
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="fadeInUp">
                    <div className="content-section">
                        <h2>Introduction</h2>
                        <p>
                            Leadership hiring today requires more than matching resumes to job descriptions—companies need individuals who align with their culture, vision, and long-term goals.
                            At Intryx, we operate as an extension of your hiring team, ensuring every hire contributes to both performance and organizational growth.
                            Our partnership model is built on transparency, precision, and a strong candidate experience. Let’s explore how our staffing solutions transform how businesses attract and retain top talent.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="content-section">
                    <ScrollReveal animation="fadeInUp">
                        <h2>Services We Offer</h2>
                    </ScrollReveal>
                    <div className="services-list-simple">
                        <ScrollReveal animation="slideInLeft" delay="0.1s">
                            <div className="service-simple-item">
                                <div className="icon"><FaUserTie /></div>
                                <div className="text">
                                    <h3>Permanent (Direct Hire) Recruitment</h3>
                                    <p>Long-term hires tailored for business-critical roles.</p>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="slideInLeft" delay="0.2s">
                            <div className="service-simple-item">
                                <div className="icon"><FaHandshake /></div>
                                <div className="text">
                                    <h3>Interim Management</h3>
                                    <p>Short-term leadership solutions for transitional periods.</p>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="slideInLeft" delay="0.3s">
                            <div className="service-simple-item">
                                <div className="icon"><FaChartLine /></div>
                                <div className="text">
                                    <h3>Executive Career Counseling</h3>
                                    <p>Advisory services for leaders looking to make their next big move.</p>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="slideInLeft" delay="0.4s">
                            <div className="service-simple-item">
                                <div className="icon"><FaBuilding /></div>
                                <div className="text">
                                    <h3>Succession Planning</h3>
                                    <p>Strategic pipelines to ensure business continuity.</p>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="slideInLeft" delay="0.5s">
                            <div className="service-simple-item">
                                <div className="icon"><FaChartLine /></div>
                                <div className="text">
                                    <h3>Talent Mapping & Market Intelligence</h3>
                                    <p>Deep insights into the talent landscape and compensation benchmarks.</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="content-section">
                    <ScrollReveal animation="fadeInUp">
                        <h2>Industries We Serve</h2>
                    </ScrollReveal>
                    <div className="industries-grid">
                        <ScrollReveal animation="fadeInUp" delay="0.1s">
                            <div className="industry-card">
                                <img src={industry1} alt="Technology" />
                                <div className="overlay">
                                    <h3>E-commerce & Retail</h3>
                                    <span>Learn More</span>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="fadeInUp" delay="0.2s">
                            <div className="industry-card">
                                <img src={industry2} alt="Finance" />
                                <div className="overlay">
                                    <h3>Technology & SaaS</h3>
                                    <span>Learn More</span>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="fadeInUp" delay="0.3s">
                            <div className="industry-card">
                                <img src={industry3} alt="Manufacturing" />
                                <div className="overlay">
                                    <h3>Healthcare</h3>
                                    <span>Learn More</span>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="fadeInUp" delay="0.4s">
                            <div className="industry-card">
                                <img src={industry4} alt="Healthcare" />
                                <div className="overlay">
                                    <h3>Manufacturing</h3>
                                    <span>Learn More</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                <div className="content-section">
                    <ScrollReveal animation="fadeInUp">
                        <h2>Our Approach</h2>
                        <p>We follow a partnership-first recruitment model—not transactional hiring.</p>
                    </ScrollReveal>
                    <div className="approach-grid">
                        <ScrollReveal animation="fadeInUp" delay="0.1s">
                            <div className="approach-card">
                                <h3>Immersed in Your Culture</h3>
                                <p>We study your values, team dynamics, and expectations to deliver perfect-fit candidates.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="fadeInUp" delay="0.2s">
                            <div className="approach-card">
                                <h3>Transparent & Data-Driven</h3>
                                <p>Our process uses structured evaluations and analytics to reduce bias and improve accuracy.</p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="fadeInUp" delay="0.3s">
                            <div className="approach-card">
                                <h3>Candidate-Centric Experience</h3>
                                <p>We treat every candidate with respect, ensuring your employer brand remains pristine. We ensure respectful, clear, and timely communication throughout the hiring journey.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

                <ScrollReveal animation="fadeInUp">
                    <div className="content-section">
                        <h2>Why Intryx</h2>
                        <ul className="why-list">
                            <li><FaCheck /> <span>Proactive sourcing</span></li>
                            <li><FaCheck /> <span>Data-driven hiring decisions</span></li>
                            <li><FaCheck /> <span>Ongoing talent pool development</span></li>
                            <li><FaCheck /> <span>Ethical standards, confidentiality, and compliance</span></li>
                        </ul>
                    </div>
                </ScrollReveal>

                <div className="content-section">
                    <ScrollReveal animation="fadeInUp">
                        <h2>Tailored Recruitment Solutions</h2>
                        <p>Whether you need one hire or a full team, our solutions scale with you.</p>
                    </ScrollReveal>
                    <ScrollReveal animation="fadeInUp" delay="0.2s">
                        <div className="client-feature">
                            <img src={clientRec} alt="Client" />
                            <div className="content">
                                <h3>Finding the Right Leader For a Growing Board</h3>
                                <p>A recent case study on how we placed a CTO for a Series B fintech in under 4 weeks.</p>
                                <h4 className="impact-header">Impact:</h4>
                                <ul className="stats">
                                    <li>40% IB Matrix helped.</li>
                                    <li>30% IB Matrix helped.</li>
                                    <li>25% IB Matrix helped.</li>
                                    <li>20% IB Matrix helped.</li>
                                </ul>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="content-section partnering-section">
                    <ScrollReveal animation="fadeInUp">
                        <h2>How Partnering Helps You</h2>
                    </ScrollReveal>
                    <div className="partnering-grid">
                        <div className="partner-col left">
                            <ScrollReveal animation="slideInLeft" delay="0.1s">
                                <div className="partner-item">
                                    <div className="icon"><FaChartLine /></div>
                                    <h3>Lower Hiring Costs per role</h3>
                                    <p>Lorem ipsum Lorem ipsum Lorem ipsum .</p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal animation="slideInLeft" delay="0.2s">
                                <div className="partner-item">
                                    <div className="icon"><FaUserTie /></div>
                                    <h3>Access Passive Candidates</h3>
                                    <p>Lorem ipsum Lorem ipsum Lorem ipsum .</p>
                                </div>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal animation="fadeInUp" delay="0.3s">
                            <div className="partner-center-img">
                                <img src={centerCollaboration} alt="Team Collaboration" />
                            </div>
                        </ScrollReveal>

                        <div className="partner-col right">
                            <ScrollReveal animation="slideInRight" delay="0.1s">
                                <div className="partner-item">
                                    <div className="icon"><FaBuilding /></div>
                                    <h3>Reduced time-to-fill</h3>
                                    <p>Lorem ipsum Lorem ipsum Lorem ipsum .</p>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal animation="slideInRight" delay="0.2s">
                                <div className="partner-item">
                                    <div className="icon"><FaHandshake /></div>
                                    <h3>Better quality hires & cultural fit</h3>
                                    <p>Lorem ipsum Lorem ipsum Lorem ipsum.</p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>

                <ScrollReveal animation="fadeInUp">
                    <div className="content-section">
                        <h2>Final Thoughts</h2>
                        <p>
                            Executive staffing is more than recruitment—it’s about building leaders who shape the future of your business.
                            At Intryx, we bridge the gap between organizations and high-impact talent through partnership-driven hiring, structured evaluation, and deep market intelligence.
                            Strong leaders build strong companies. And we help you find them.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="fadeInUp" delay="0.2s">
                    <div className="cta-section">
                        <h2>Let’s Build Your Growth Story Together</h2>
                        <p>Connect with our team to explore solutions tailored to your business needs.</p>
                        <button className="btn btn-primary">Book a Call</button>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
}
