import { useState } from 'react';
import './Carousel.css';

function Carousel({ items, title }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel">
            {title && <h4 className="carousel-title">{title}</h4>}

            <div className="carousel-container">
                <button
                    className="carousel-btn carousel-prev"
                    onClick={goToPrevious}
                    aria-label="Previous slide"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>

                <div className="carousel-viewport">
                    <div
                        className="carousel-track"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {items.map((item, index) => (
                            <div key={index} className="carousel-slide">
                                {item.type === 'video' ? (
                                    <video
                                        src={item.src}
                                        controls
                                        className="carousel-media"
                                        poster={item.poster}
                                    />
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={item.alt || `Slide ${index + 1}`}
                                        className="carousel-media"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    className="carousel-btn carousel-next"
                    onClick={goToNext}
                    aria-label="Next slide"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>

            {items.length > 1 && (
                <div className="carousel-dots">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Carousel;
