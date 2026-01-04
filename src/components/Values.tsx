import React from 'react';
import { FaEye, FaBullseye, FaHeart, FaHandshake } from 'react-icons/fa';
import '../styles/Values.scss';

export const Values: React.FC = () => {
    return (
        <section className="values" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="badge">About Us</span>
                    <h2 className="section-title">Building Intelligent Growth for<br />Modern Businesses</h2>
                    <p className="section-subtitle">Our core strategy relies on four fundamental pillars that guide everything we do.</p>
                </div>

                <div className="values-grid">
                    <div className="value-card glow">
                        <div className="icon-wrapper"><FaEye /></div>
                        <h3>Our Vision</h3>
                        <p>To be the most trusted growth partner — transforming businesses through innovation, leadership, and intelligent strategy

To be the most trusted growth partner — transforming businesses through innovation, leadership, and intelligent strategy.</p>
                    </div>

                    <div className="value-card glow">
                        <div className="icon-wrapper"><FaBullseye /></div>
                        <h3>Our Mission</h3>
                        <p>To be the most trusted growth partner — transforming businesses through innovation, leadership, and intelligent strategy

To be the most trusted growth partner — transforming businesses through innovation, leadership, and intelligent strategy</p>
                    </div>

                    <div className="value-card glow">
                        <div className="icon-wrapper"><FaHeart /></div>
                        <h3>Our Values</h3>
                        <p>Integrity, Innovation, and Impact are at the heart of every decision we make and every partnership we build.</p>
                    </div>

                    <div className="value-card glow">
                        <div className="icon-wrapper"><FaHandshake /></div>
                        <h3>Our Approach</h3>
                        <p>To be the most trusted growth partner — transforming businesses through innovation, leadership, and intelligent strategy

To be the most trusted growth partner — transforming businesses through innovation, leadership, and intelligent strategy</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
