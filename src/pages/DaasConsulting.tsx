import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheck, FaFileExcel, FaSearch, FaPaperPlane } from 'react-icons/fa';
import '../styles/DaasConsulting.scss';
import frame990 from '../assets/Frame-990.svg';
// Placeholder image import removed as it was unused

export const DaasConsulting: React.FC = () => {
    return (
        <div className="daas-page">
            <div className="container">
                <Link to="/" className="back-link">
                    <FaArrowLeft /> Go Back
                </Link>

                <div className="daas-header">
                    <div className="logo-mark">
                        {/* Placeholder for the blue/purple logo mark in the design */}
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H20V20H0V0Z" fill="#2563EB" />
                            <path d="M20 20H40V40H20V20Z" fill="#4F46E5" />
                        </svg>
                    </div>
                    <h1>DaaS-Driven Strategic Consulting: Reliable, Actionable Data Delivered as a Service</h1>
                    <p className="intro-text">
                        In modern teams, execution depends on data — precise, verified, and ready for outreach. In this article, we explore how Intryx delivers curated Talent & Sales Leads Intelligence as a Data-as-a-Service (DaaS) model, helping teams accelerate hiring, outreach, and revenue operations with zero extra load.
                    </p>
                </div>

                <div className="hero-section">
                    {/* Dashboard visual */}
                    <div className="hero-image-wrapper">
                        <img src={frame990} alt="DaaS Dashboard Interface" />
                    </div>
                </div>

                <section className="content-section">
                    <h2>Introduction</h2>
                    <p>
                        Data is the foundation of every successful hiring and sales motion — but collecting, validating, and organizing that data is slow, inconsistent, and resource-heavy.
                    </p>
                    <p>
                        Intryx solves this problem by delivering ready-to-use, role-specific datasets directly to your inbox.
                        Every drop includes candidates or buyer accounts that match your criteria, enriched with validation, context, and clear reasoning behind each selection.
                    </p>
                    <p>
                        Our promise is simple:<br />
                        Reliable lists that create interviews and meetings — not noise.
                    </p>
                </section>

                <section className="features-section">
                    <h2>What's Inside Each Delivery</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="step-number">01</div>
                            <h3>Clean Excel workbook</h3>
                            <p>Tabs for candidates/accounts, decision-makers, validation status, and import-ready CSVs for ATS/CRM.</p>
                        </div>
                        <div className="feature-card">
                            <div className="step-number">02</div>
                            <h3>PowerPoint briefing</h3>
                            <p>Market overview, ICP alignment, shortlist highlights, and outreach angles.</p>
                        </div>
                        <div className="feature-card">
                            <div className="step-number">03</div>
                            <h3>Quality controls</h3>
                            <p>Dedupes, heuristic scoring, suppression lists, and change logs.</p>
                        </div>
                        <div className="feature-card">
                            <div className="step-number">04</div>
                            <h3>Compliance</h3>
                            <p>Right-sourced data with consent, opt-out handling, and audit notes (GDPR/CCPA aligned).</p>
                        </div>
                    </div>
                </section>

                <section className="process-section">
                    <h2>How We Work</h2>
                    <p className="section-subtitle">Our DaaS workflow is simple, predictable, and built for speed:</p>

                    <div className="process-steps">
                        <div className="process-step">
                            <div className="icon"><FaSearch /></div>
                            <div className="details">
                                <h3>You define roles / ICP and locations</h3>
                                <p>Candidate profiles or account criteria + geographies.</p>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="icon"><FaCheck /></div>
                            <div className="details">
                                <h3>We research, validate & enrich</h3>
                                <p>Primary research + partner datasets + public records.</p>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="icon"><FaFileExcel /></div>
                            <div className="details">
                                <h3>We format & deliver</h3>
                                <p>Excel + PowerPoint in your inbox — ready for use.</p>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="icon"><FaPaperPlane /></div>
                            <div className="details">
                                <h3>You import & start outreach same day</h3>
                                <p>No tools. No dashboards. No new software.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="final-thoughts">
                    <h2>Final Thoughts</h2>
                    <p>DaaS isn't about giving you data — it's about giving you momentum.</p>
                    <p>Intryx transforms slow, manual research into predictable intelligence that fuels hiring, sales, and revenue operations. With our ready-to-activate datasets, teams spend less time searching and more time closing.</p>
                    <p>The future of Talent & Sales Intelligence is simple:<br />Get the right data. Deliver it fast. Use it the same day.</p>
                </section>

                <div className="cta-box">
                    <h2>Let's Build Your Growth<br />Story Together</h2>
                    <p>Connect with our team to explore solutions tailored to your business needs.</p>
                    <button className="btn btn-primary">Book a Call <FaArrowLeft style={{ transform: 'rotate(135deg)', marginLeft: '8px' }} /></button>
                </div>
            </div>
        </div>
    );
};
