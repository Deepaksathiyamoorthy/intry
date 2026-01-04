import React from 'react';
import '../styles/CTA.scss';
import ScheduleMeetingButton from './ScheduleMeetingButton/ScheduleMeetingButton';

export const CTA: React.FC = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <div className="cta-card">
                    <div className="cta-content">
                        <h2>Let's Build Your Growth<br />Story Together</h2>
                        <p>Join world-class businesses that trust Integrio to scale smarter, faster, and better.</p>
                        <ScheduleMeetingButton buttonText="Book a Call Now" />
                    </div >
                </div >
            </div >
        </section >
    );
};
