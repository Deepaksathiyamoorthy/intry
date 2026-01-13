import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CTA.scss';
import ScheduleMeetingButton from './ScheduleMeetingButton/ScheduleMeetingButton';
import { ScrollReveal } from './ScrollReveal';

export const CTA: React.FC = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <ScrollReveal animation="fadeInUp">
                    <motion.div
                        className="cta-card"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="cta-content">
                            <h2>Let's Build Your Growth<br />Story Together</h2>
                            <p>Join world-class businesses that trust Integrio to scale smarter, faster, and better.</p>
                            <ScheduleMeetingButton buttonText="Book a Call Now" />
                        </div >
                    </motion.div >
                </ScrollReveal>
            </div >
        </section >
    );
};
