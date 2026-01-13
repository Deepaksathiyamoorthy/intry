import React from 'react';
import { FaChartLine, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import heroVisual from '../assets/hero-visual.png';
import ScheduleMeetingButton from './ScheduleMeetingButton/ScheduleMeetingButton';
import '../styles/Solutions.scss';
import { ScrollReveal } from './ScrollReveal';

export const Solutions: React.FC = () => {
    return (
        <section className="solutions" id="solutions">
            <div className="container">
                <ScrollReveal animation="fadeInUp">
                    <div className="section-header">
                        <span className="badge">Our Expertise</span>
                        <h2 className="section-title">Solutions That Power Smarter<br />Business Growth</h2>
                        <p className="section-subtitle">Strategic services designed to help businesses launch, hire, and scale effectively.</p>
                    </div>
                </ScrollReveal>

                <div className="solutions-grid">
                    {/* Right Panel - Service List (Now visually Left) */}
                    <div className="solution-right-panel">
                        <ScrollReveal animation="slideInLeft" delay="0.1s">
                            <div className="service-item">
                                <div className="icon-box">
                                    <FaChartLine />
                                </div>
                                <h3>Go-To-Market &<br />Growth Systems</h3>
                                <p>We help businesses design and execute end-to-end Go-To-Market strategies — from identifying the right buyer to building repeatable growth systems.</p>
                                <Link to="/market-launch" className="learn-more-btn">Learn More</Link>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="slideInLeft" delay="0.2s">
                            <div className="service-item">
                                <div className="icon-box">
                                    <FaUsers />
                                </div>
                                <h3>Executive Staffing</h3>
                                <p>We partner with organizations to recruit exceptional leaders who match their culture, strategy, and long-term goals.lorum ipsum.</p>
                                <Link to="/executive-hire" className="learn-more-btn">Learn More</Link>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal animation="slideInLeft" delay="0.3s">
                            <div className="service-item">
                                <div className="icon-box">
                                    <FaCalendarAlt />
                                </div>
                                <h3>DAAS-Driven<br />Strategic Consulting</h3>
                                <p>We transform raw data into actionable intelligence that improves decision-making, reduces risk, and unlocks growth opportunities.</p>
                                <Link to="/daas-consulting" className="learn-more-btn">Learn More</Link>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Left Panel - Visual & High Level (Now visually Right) */}
                    <div className="solution-left-panel">
                        {/* Background Visual */}
                        <ScrollReveal animation="fadeIn" delay="0.5s" className="bg-visual-wrapper">
                            <img src={heroVisual} alt="Background Visual" className="bg-visual" />
                        </ScrollReveal>

                        <ScrollReveal animation="slideInRight" delay="0.1s" className="panel-content-wrapper">
                            <div className="panel-content">
                                <h2>Everything You Need to<br />Launch, Level, and Grow</h2>

                                <div className="work-together-btn-wrapper">
                                    <ScheduleMeetingButton buttonText="Let’s Work Together" className="btn btn-primary work-together-btn" />
                                </div>

                                <p className="panel-description">
                                    From market entry to leadership hiring and data consulting - we help you grow intelligently.
                                </p>

                                {/* Scrolling Tags Effect (Simulated) */}
                                <div className="tags-container">
                                    <div className="tag-row">
                                        <span className="tag">Market Launch</span>
                                        <span className="tag">Executive Hire</span>
                                        <span className="tag">Data Insights</span>
                                        <span className="tag">Growth Systems</span>
                                        <span className="tag">Market Launch</span>
                                        <span className="tag">Executive Hire</span>
                                        <span className="tag">Data Insights</span>
                                        <span className="tag">Growth Systems</span>
                                        <span className="tag">Market Launch</span>
                                        <span className="tag">Executive Hire</span>
                                        <span className="tag">Data Insights</span>
                                        <span className="tag">Growth Systems</span>
                                    </div>
                                    <div className="tag-row reverse">
                                        <span className="tag">Market Launch</span>
                                        <span className="tag">Executive Hire</span>
                                        <span className="tag">Data Insights</span>
                                        <span className="tag">Growth Systems</span>
                                        <span className="tag">Market Launch</span>
                                        <span className="tag">Executive Hire</span>
                                        <span className="tag">Data Insights</span>
                                        <span className="tag">Growth Systems</span>
                                        <span className="tag">Market Launch</span>
                                        <span className="tag">Executive Hire</span>
                                        <span className="tag">Data Insights</span>
                                        <span className="tag">Growth Systems</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};
