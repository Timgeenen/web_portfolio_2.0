import { PROJECTS_DATA } from '@Data';
import { Ellipse, Project } from '@UI';
import './ProjectsPage.css';

function ProjectsPage() {
    const projects = PROJECTS_DATA.map((project, i) => <Project {...project} index={i} />);
    const progressBar = PROJECTS_DATA.map(() => <li className={'projects-progress'} />);
    return (
        <div className="projects-page-wrapper">
            <section className="projects-page">
                <h2 className="projects-header">Recent Work</h2>
                <div className="projects-contentWrapper">
                    <Ellipse id="project-ellipse" gradientId="project-ellipse-gradient" />
                    <div className="projects-content">
                        <ul className="projects-list">{...projects}</ul>
                        <ul className="projects-progressBar">{...progressBar}</ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProjectsPage;
