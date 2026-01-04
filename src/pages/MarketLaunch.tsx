import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaRocket, FaChartLine, FaBolt, FaFlask, FaCrown, FaBoxOpen, FaWeightHanging } from 'react-icons/fa';
import teamCollaboration from '../assets/team-collaboration-1.png';
import sparkleIcon from '../assets/cs_star_8-1.png';
import '../styles/MarketLaunch.scss';

export const MarketLaunch = () => {
    // Scroll to top on mount
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="market-launch">
            <div className="container">
                <Link to="/" className="back-link">
                    <FaArrowLeft /> Go Back
                </Link>

                <div className="page-header">
                    <div className="sparkle-container">
                        <img src={sparkleIcon} alt="Sparkle" className="sparkle-img" />
                    </div>
                    <h1>Unlock Effortless B2B Growth: How Extended Sales Enablement Teams Accelerate Revenue</h1>
                    <p className="meta">
                        Businesses today face increasing pressure to generate predictable, qualified, and scalable revenue. In this article, we explore how IB Matrix empowers organizations to grow faster by acting as an extended sales enablement team—combining people, processes, and data to unlock consistent B2B growth.
                    </p>
                </div>

                <div className="hero-image">
                    <img src={teamCollaboration} alt="Team collaboration" />
                </div>

                <div className="content-section">
                    <h2>Introduction</h2>
                    <p>
                        Growth in B2B markets demands more than just outreach—it requires alignment across marketing, sales, operations, and data.Companies often struggle with lead quality, pipeline health, and conversion consistency.

                        That’s where IB Matrix steps in.We serve as your extended growth engine, integrating directly into your teams to simplify client acquisition and optimize every stage of the revenue process.

                        Let’s explore how this extended partnership approach is transforming B2B growth for modern organizations.
                    </p>
                </div>

                <div className="content-section">
                    <h2>Why Choose Intryx for Your Launch</h2>
                    <p>
                        Intryx is not just another service provider—we operate as a strategic extension of your internal teams. Our proven frameworks solve key challenges like appointment generation, pipeline conversion, and revenue predictability.

                        Here’s how we create measurable impact:
                    </p>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="icon"><FaRocket /></div>
                            <h3>Strategic Market Positioning</h3>
                            <p>We unify people, processes, and data to support consistent, repeatable growth.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon"><FaChartLine /></div>
                            <h3>Predictable Pipeline Movement</h3>
                            <p>From follow-ups to scheduling, our workflow automation ensures no opportunity is lost.</p>
                        </div>
                        <div className="feature-card">
                            <div className="icon"><FaBolt /></div>
                            <h3>Revenue Acceleration Frameworks</h3>
                            <p>We apply our RevOps expertise to streamline operations and eliminate growth bottlenecks.</p>
                        </div>
                    </div>
                </div>

                <div className="content-section">
                    <h2>Our Services</h2>
                    <p>Below are the core services we bring into your business as your extended enablement team:</p>

                    <div className="services-list">
                        <div className="service-item">
                            <div className="icon"><FaFlask /></div>
                            <div className="service-content">
                                <h4>Pipeline Creation</h4>
                                <p>Continual sourcing, filtering, and nurturing of high-intent leads to keep your sales pipeline healthy and active.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="icon"><FaBoxOpen /></div>
                            <div className="service-content">
                                <h4>Sales Operations</h4>
                                <p>Automated scheduling, follow-up systems, CRM optimization, and support for global expansion.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="icon"><FaCrown /></div>
                            <div className="service-content">
                                <h4>RevOps Strategy</h4>
                                <p>Data-driven insights, unified sales processes, and system-level improvements that strengthen revenue foundations.</p>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="icon"><FaWeightHanging /></div>
                            <div className="service-content">
                                <h4>Commercial Excellence</h4>
                                <p>Structured, scalable go-to-market execution built with industry-leading expertise in B2B sales growth.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-section">
                    <h2>How We Work With You</h2>
                    <div className="subtitle">Embedded Partnership Model (In-house + Outsourcing)</div>
                    <p>
                        Think of Intryx not as an external vendor, but as a fully integrated part of your growth team.
                        We embed into your workflows, offload transactional tasks, optimize your processes, and drive high-impact results—while your team focuses on closing deals and expanding client relationships.
                    </p>
                </div>

                <div className="content-section">
                    <h2>Final Thoughts</h2>
                    <p>
                        B2B growth is no longer about isolated teams working separately—it’s about unified systems working together.
                        At Intryx, we help organizations build predictable revenue engines powered by high-intent leads, optimized processes, and data-backed strategies.
                        <br /><br />
                        The fastest-growing companies of tomorrow are the ones building extended teams today.
                    </p>
                </div>

                <div className="cta-section">
                    <h2>Let’s Build Your Growth Story Together</h2>
                    <p>Connect with our team to explore solutions tailored to your business needs.</p>
                    <button className="btn btn-primary">Book a Call ↗</button>
                </div>
            </div>
        </div>
    )
}
