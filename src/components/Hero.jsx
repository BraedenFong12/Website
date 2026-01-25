import { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
    const [displayText, setDisplayText] = useState('');
    const fullText = "Hello! I'm Braeden Fong.";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 50);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-image-container">
                    <div className="hero-image-glow"></div>
                    <img
                        src="/profile.jpg"
                        alt="Braeden Fong"
                        className="hero-image"
                    />
                </div>

                <div className="hero-text">
                    <h1 className="hero-title">
                        <span className="typewriter">{displayText}</span>
                        <span className="cursor">|</span>
                    </h1>
                    <p className="hero-subtitle">
                        Computer Science & Business Student at UBC
                    </p>
                    <div className="hero-badges">
                        <span className="badge">Full Stack Dev</span>
                        <span className="badge">Data Analysis</span>
                        <span className="badge">Teaching Assistant</span>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <span>Scroll to explore</span>
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
}

export default Hero;
