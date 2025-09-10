import { Tech } from '@UI';
import { TECH_DATA } from '@Data';
import './TechPage.css';

function TechPage() {
    const technologies = TECH_DATA.map((tech) => <Tech {...tech} />);
    return (
        <div className="tech-page-wrapper">
            <section className="tech">
                <div className="tech-contentWrapper">
                    <h2 className="tech-header">
                        MY
                        <br />
                        SKILLS
                    </h2>
                    <ul className="tech-list">{...technologies}</ul>
                </div>
            </section>
        </div>
    );
}

export default TechPage;
