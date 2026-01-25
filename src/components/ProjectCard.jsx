import Carousel from './Carousel';
import './ProjectCard.css';

function ProjectCard({ title, description, details, images }) {
    const carouselItems = images?.map(img => ({
        type: img.endsWith('.mp4') ? 'video' : 'image',
        src: img,
        alt: title
    }));

    return (
        <div className="project-card glass-card">
            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
                {details && <p className="project-details">{details}</p>}
            </div>

            {carouselItems && carouselItems.length > 0 && (
                <Carousel items={carouselItems} />
            )}
        </div>
    );
}

export default ProjectCard;
