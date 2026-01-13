import React from 'react';
import teamImg from '../assets/team-update.jpg';
import '../styles/Team.scss';
import { ScrollReveal } from './ScrollReveal';

export const Team: React.FC = () => {
    return (
        <section className="team" id="team">
            <div className="container">
                <ScrollReveal animation="fadeInUp">
                    <div className="section-header">
                        <span className="badge">Our Team</span>
                        <h2 className="section-title">The People Behind<br />Our Purpose</h2>
                        <p className="section-subtitle">A dedicated team of strategists, innovators, and problem-solvers working together to turn ideas into measurable results.</p>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="fadeInUp" delay="0.2s">
                    <div className="team-image-wrapper">
                        <img
                            src={teamImg}
                            alt="Our Team"
                            className="team-img"
                        />
                        <div className="team-overlay"></div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};
