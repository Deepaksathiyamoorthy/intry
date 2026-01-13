import React, { useState, useEffect } from 'react';
import successImg from '../assets/case-study.jpg';
import '../styles/SuccessStories.scss';
import { ScrollReveal } from './ScrollReveal';

export const SuccessStories: React.FC = () => {
    const [visibleStats, setVisibleStats] = useState<number>(0);

    // Stats data with bullet points
    const stats = [
        { percentage: '40%', description: 'Intryx helped' },
        { percentage: '30%', description: 'Intryx helped' },
        { percentage: '25%', description: 'Intryx helped' },
        { percentage: '20%', description: 'Intryx helped' }
    ];

    useEffect(() => {
        // Show stats one by one with a delay
        const timer = setInterval(() => {
            setVisibleStats(prev => {
                if (prev < stats.length) {
                    return prev + 1;
                }
                clearInterval(timer);
                return prev;
            });
        }, 500); // 500ms delay between each stat

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="success-stories" id="case-studies">
            <div className="container">
                <ScrollReveal animation="fadeInUp">
                    <div className="section-header">
                        <span className="badge">Case Study</span>
                        <h2 className="section-title">Success Stories That Define<br />Our Impact</h2>
                        <p className="section-subtitle">See the results we've created for businesses across industries.</p>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="fadeInUp" delay="0.2s">
                    <div className="story-card">
                        <div className="story-image">
                            <img
                                src={successImg}
                                alt="Success Story Visualization"
                            />
                        </div>
                        <div className="story-content">
                            <div className="story-company">
                                <span className="company-logo">Intryx</span>
                            </div>
                            <h3>Finding the Right Leader for a Growing Retail Brand</h3>
                            <p className="story-excerpt">
                                "Intryx helped a retail startup hire a Head of Operations who aligned perfectly with their culture improving team performance and reducing operational delays by 40%."
                            </p>

                            <ul className="story-stats">
                                {stats.map((stat, index) => (
                                    <li
                                        key={index}
                                        className={`stat ${index < visibleStats ? 'visible' : ''}`}
                                        style={{ animationDelay: `${index * 0.5}s` }}
                                    >
                                        <h4>{stat.percentage}</h4>
                                        <span>{stat.description}</span>
                                    </li>
                                ))}
                            </ul>


                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
