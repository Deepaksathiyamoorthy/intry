import React, { useState, useEffect } from 'react';
import heroVisual from '../assets/hero-visual.png';


import '../styles/Hero.scss';
import ScheduleMeetingButton from './ScheduleMeetingButton/ScheduleMeetingButton';

const PHRASES = ["Grow Smarter", "Scale Faster", "Hire Better", "Decide with Data", "Lead with Clarity"];

export const Hero: React.FC = () => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % PHRASES.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero" id="home" style={{ backgroundImage: `url(${heroVisual})` }}>
            <div className="container hero-content">
                <div className="hero-text">
                    <h1>Empowering Business<br />
                        to <span key={currentPhraseIndex} className="highlight-text-pop">
                            {PHRASES[currentPhraseIndex]}
                        </span>
                    </h1>
                    <p>
                        We help organizations launch faster, hire better, and scale using data-driven strategy and intelligent systems.
                    </p>
                    <div className="hero-actions">
                        <ScheduleMeetingButton buttonText="Get Started Today" />
                    </div >
                    <div className="hero-trusted">
                        <span>50+ Businesses Trust Us</span>

                    </div>


                </div >
                {/* Visual hidden as it is now the background
                <div className="hero-visual">
                    <div className="circle-glow"></div>
                    <img src={heroVisual} alt="Growth Visualization" className="hero-img" />
                    <div className="abstract-shape" style={{ display: 'none' }}>
                    </div>
                </div>
                */}
            </div >
        </section >
    );
};
