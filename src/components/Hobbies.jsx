import Carousel from './Carousel';
import './Hobbies.css';

function Hobbies() {
    const baseUrl = import.meta.env.BASE_URL;

    const smashItems = [
        { type: 'image', src: `${baseUrl}cachedImage.PNG`, alt: 'UBC Smash Bros Team' },
        { type: 'video', src: `${baseUrl}smashie.mp4`, alt: 'Smash Bros Gameplay' }
    ];

    const travelItems = [
        { type: 'image', src: `${baseUrl}travel.jpg`, alt: 'Japan Travel 1' },
        { type: 'image', src: `${baseUrl}travel2.png`, alt: 'Japan Travel 2' },
        { type: 'image', src: `${baseUrl}travel3.png`, alt: 'Japan Travel 3' }
    ];

    return (
        <section className="hobbies section">
            <div className="container">
                <h2 className="section-title">Hobbies</h2>

                <div className="hobbies-grid">
                    {/* Smash Bros */}
                    <div className="hobby-card glass-card">
                        <div className="hobby-icon">🎮</div>
                        <h3>Smash Bros Tournaments</h3>
                        <p>
                            I enjoy competing in Smash Bros tournaments with my friends.
                            Below is a photo of our UBC Smash team, and a video of me playing.
                        </p>
                        <Carousel items={smashItems} />
                    </div>

                    {/* Travelling */}
                    <div className="hobby-card glass-card">
                        <div className="hobby-icon">✈️</div>
                        <h3>Travelling</h3>
                        <p>
                            Travelling has brought me some of the best memories of my life.
                            In May 2023, I went to Japan with two of my friends!
                        </p>
                        <Carousel items={travelItems} />
                    </div>

                    {/* Running */}
                    <div className="hobby-card glass-card running-card">
                        <div className="hobby-icon">🏃</div>
                        <h3>Running</h3>
                        <p>
                            Running helps me maintain my fitness and clear my mind.
                            I enjoy running to explore, but also to push myself mentally and physically.
                        </p>

                        <div className="running-stats">
                            <div className="run-stat">
                                <span className="run-time">3:22</span>
                                <span className="run-distance">1000m PR</span>
                            </div>
                            <div className="run-stat">
                                <span className="run-time">21:11</span>
                                <span className="run-distance">5000m PR</span>
                            </div>
                            <div className="run-stat">
                                <span className="run-time">1:03</span>
                                <span className="run-distance">400m PR</span>
                            </div>
                        </div>

                        <span className="updated-date">Updated September 19th 2024</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hobbies;
