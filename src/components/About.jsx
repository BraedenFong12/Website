import './About.css';

function About() {
    return (
        <section className="about section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content glass-card">
                    <div className="about-text">
                        <p>
                            I'm studying a combined major in <strong>Business and Computer Science (BUCS)</strong> at UBC Sauder.
                            I'm passionate about building scalable software solutions and data-driven applications.
                        </p>

                        <p>
                            With hands-on experience in <strong>full-stack development</strong> and <strong>data engineering</strong>
                            from my co-ops at ICBC, I've worked with technologies like .NET, ReactJS, Scala, and Apache Spark
                            to build production-ready systems used by thousands of employees.
                        </p>

                        <p>
                            Outside of tech, I'm a certified <strong>lifeguard</strong> with strong leadership and communication skills.
                        </p>
                    </div>

                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number">1,500+</span>
                            <span className="stat-label">Users Impacted</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">12+</span>
                            <span className="stat-label">Months Co-op</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">UBC</span>
                            <span className="stat-label">BUCS Student</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
