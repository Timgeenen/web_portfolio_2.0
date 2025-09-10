import { EXPERTISES } from '@Data';
import './expertisePage.css';
import { CtaButton, Expertise } from '@UI';

function ExpertisePage() {
    return (
        <section className="expertise-page">
            <h2 className="expertise-header">My Expertise</h2>
            <div className="expertise-contentWrapper">
                <div className="expertise-content">
                    {EXPERTISES.map((data) => (
                        <Expertise {...data} />
                    ))}
                </div>
            </div>
            <CtaButton />
        </section>
    );
}

export default ExpertisePage;
