import './Experience.css';

function Experience() {
    const experiences = [
        {
            role: "Software Engineer - Co-op",
            company: "Insurance Corporation of British Columbia (ICBC)",
            location: "North Vancouver, BC",
            period: "April 2025 - Sept 2025",
            highlights: [
                "Designed and implemented a scalable backend API using .NET (C#) and ReactJS to serve real-time vacation request data for internal applications",
                "Developed a vacation heatmap analytics tool used by 1,500+ employees, enabling data-driven insights into peak vacation trends",
                "Delivered production-ready, cloud-integrated solutions following object-oriented design principles and SDLC best practices",
                "Collaborated in Agile sprints for code reviews, debugging, and unit testing to ensure robust, maintainable code",
                "Led the migration of contact center data and services to Genesys Cloud (AWS infrastructure)"
            ],
            tech: [".NET", "C#", "ReactJS", "AWS", "Genesys Cloud"]
        },
        {
            role: "Data Engineer - Co-op",
            company: "Insurance Corporation of British Columbia (ICBC)",
            location: "North Vancouver, BC",
            period: "Sept 2024 - April 2025",
            highlights: [
                "Developed scalable data pipelines using Scala, SQL, and Apache Spark for high-performance data processing across large datasets",
                "Optimized an existing data pipeline, reducing runtime by 17% by converting output to Parquet format",
                "Collaborated on ETL workflows for data ingestion and transformation, ensuring reliable integration of data sources"
            ],
            tech: ["Scala", "SQL", "Apache Spark", "Parquet", "ETL"]
        },
        {
            role: "Teaching Assistant",
            company: "University of British Columbia",
            location: "Vancouver, BC",
            period: "2023 - 2024",
            highlights: [
                "Ran lab sessions for 30+ students in CPSC 203 (Python Data Structures & Algorithms)",
                "Helped students understand complex programming concepts",
                "Improved ability to communicate technical information clearly"
            ],
            tech: ["Python", "Data Structures", "Algorithms"]
        }
    ];

    return (
        <section className="experience section">
            <div className="container">
                <h2 className="section-title">Experience</h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item glass-card">
                            <div className="timeline-marker"></div>

                            <div className="exp-header">
                                <h3>{exp.role}</h3>
                                <span className="exp-period">{exp.period}</span>
                            </div>

                            <div className="exp-company">
                                <span className="company-name">{exp.company}</span>
                                <span className="company-location">{exp.location}</span>
                            </div>

                            <ul className="exp-highlights">
                                {exp.highlights.map((highlight, i) => (
                                    <li key={i}>{highlight}</li>
                                ))}
                            </ul>

                            <div className="exp-tech">
                                {exp.tech.map((t, i) => (
                                    <span key={i} className="tech-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
