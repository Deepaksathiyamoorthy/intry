import React from 'react';
import successImg from '../assets/success-stories-new.jpg';
import '../styles/SuccessStories.scss';

export const SuccessStories: React.FC = () => {
    return (
        <section className="success-stories" id="case-studies">
            <div className="container">
                <div className="section-header">
                    <span className="badge">Case Study</span>
                    <h2 className="section-title">Success Stories That Define<br />Our Impact</h2>
                    <p className="section-subtitle">See the results we've created for businesses across industries.</p>
                </div>

                <div className="story-card">
                    <div className="story-image">
                        <img
                            src={successImg}
                            alt="Success Story Visualization"
                        />
                    </div>
                    <div className="story-content">
                        <div className="story-company">
                            <span className="company-logo">IB Matrix</span>
                        </div>
                        <h3>Finding the Right Leader for a Growing Retail Brand</h3>
                        <p className="story-excerpt">
                            "IB Matrix helped a retail startup hire a Head of Operations who aligned perfectly with their culture improving team performance and reducing operational delays by 40%."
                        </p>

                        <div className="story-stats">
                            <div className="stat">
                                <h4>40%</h4>
                                <span>IB Matrix helped</span>
                            </div>
                            <div className="stat">
                                <h4>30%</h4>
                                <span>IB Matrix helped</span>
                            </div>
                            <div className="stat">
                                <h4>25%</h4>
                                <span>IB Matrix helped</span>
                            </div>
                            <div className="stat">
                                <h4>20%</h4>
                                <span>IB Matrix helped</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};
