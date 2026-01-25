import Projects from '../components/Projects';
import './ProjectsPage.css';

function ProjectsPage() {
    return (
        <main className="projects-page">
            <div className="page-header">
                <h1>My Projects</h1>
                <p>A collection of my work in software development and data analysis</p>
            </div>
            <Projects />
        </main>
    );
}

export default ProjectsPage;
