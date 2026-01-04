import React from 'react';
import { FaStar } from 'react-icons/fa';
import t1 from '../assets/avatar-1.png';
import t2 from '../assets/avatar-2.png';
import t3 from '../assets/avatar-3.png';
import t4 from '../assets/avatar-4.png';
import '../styles/Testimonials.scss';

const testimonials = [
    {
        id: 1,
        text: "The strategic insights provided by Integrio have completely transformed our roadmap. We've seen a 200% growth in just 6 months.",
        name: "Sarah Jenkins",
        role: "CEO, TechFlow",
        image: t1
    },
    {
        id: 2,
        text: "Integrio's team is simply world-class. Their approach to executive staffing helped us build a dream team in record time.",
        name: "Michael Chen",
        role: "CTO, DataSphere",
        image: t2
    },
    {
        id: 3,
        text: "Their data-driven consulting is not just a buzzword. The depth of analysis and actionable recommendations were game-changing.",
        name: "Elena Rodriguez",
        role: "VP Marketing, SolaBrands",
        image: t3
    },
    {
        id: 4,
        text: "Partnering with Integrio was the best decision we made this year. Professional, insightful, and results-oriented.",
        name: "David Park",
        role: "Founder, EcoSystems",
        image: t4
    }
];

export const Testimonials: React.FC = () => {
    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <span className="badge">Testimonials</span>
                    <h2 className="section-title">What Our Clients Say<br />About Us</h2>
                    <p className="section-subtitle">Real feedback from organizations we’ve helped grow through strategy, leadership, and data-backed insights.</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((item) => (
                        <div key={item.id} className="testimonial-card">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>
                            <p className="testimonial-text">"{item.text}"</p>
                            <div className="testimonial-author">
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h4>{item.name}</h4>
                                    <span>{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
