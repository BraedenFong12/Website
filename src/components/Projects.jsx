import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
    const projects = [
        {
            title: "Financial Tracker (Java)",
            description: "A financial tracker developed using object-oriented programming in Java, monitoring income, savings, expenses, and allowing the creation of specific savings goals.",
            tech: ["Java", "OOP", "File I/O"]
        },
        {
            title: "Data Analysis on Twitch Streamers (R)",
            description: "Analyzed Twitch streamers' growth using R and K-Nearest-Neighbors, providing valuable insights into streaming trends and viewer engagement. This project highlights the application of data analysis techniques to understand and predict viewer behavior.",
            tech: ["R", "KNN", "Data Analysis"]
        },
        {
            title: "Image Flooder (C++)",
            description: "Developed advanced algorithms in C++ to perform color-based flood fill operations, enhancing digital images with custom color patterns. Demonstrates the ability to design, build, and test software tools that improve user experiences through precise image processing.",
            details: "The first one (blue and green) uses Breadth First Search to fill the image, and the second one (red) uses Depth First Search.",
            images: ["/braedenfong_stripe_pattern.gif", "/dfsstripe.gif"],
            tech: ["C++", "BFS", "DFS", "Algorithms"]
        }
    ];

    return (
        <section className="projects section">
            <div className="container">
                <h2 className="section-title">Projects</h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-wrapper">
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                details={project.details}
                                images={project.images}
                            />
                            {project.tech && (
                                <div className="tech-tags">
                                    {project.tech.map((tag, i) => (
                                        <span key={i} className="tech-tag">{tag}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
