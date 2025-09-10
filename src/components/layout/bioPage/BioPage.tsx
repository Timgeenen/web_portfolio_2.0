import { StatCount } from '@UI';
import './bioPage.css';
import BoxGrid from '../boxGrid/BoxGrid';
import { scrollToElement } from '@Utils';

function BioPage() {
    return (
        <div className="bio-page-wrapper">
            <section className="bio-page">
                <div className="bio-content">
                    <BoxGrid grid={[8, 12]} gridWidth={400} boxGap={16} />
                    <h2 className="bio-header">
                        From Windows <br className="bio-header-br" />
                        To Code
                        <div className="bio-header-underline" />
                    </h2>
                    <div className="bio-textWrapper">
                        <p className="bio-text__original">
                            I’m from Helden, Limburg in the Netherlands and currently based in Asia.
                            After running my own window cleaning business for three years, I set out
                            to travel through Southeast Asia and along the way discovered a real
                            passion for programming. I’m always excited about opportunities where I
                            can grow, learn, and contribute—so if something feels like a good match,
                            <br />
                            <span className="bio-link">let’s connect!</span>!
                        </p>
                        <p className="bio-text__scramble">
                            <span id="bio-text__scramble1" />
                            <span id="bio-text__scramble2" />
                            <span id="bio-text__scramble3" />
                            <br />
                            <a
                                onClick={() =>
                                    scrollToElement(document.querySelector('.contact-page')!, 1000)
                                }
                                id="bio-text__scramble5"
                                className="bio-link"
                            />
                        </p>
                    </div>
                    <div className="bio-stats">
                        <StatCount param="Completed Projects" count={100} operator="+" />
                        <StatCount param="Clients" count={14} />
                        <StatCount param="Since" count={2022} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BioPage;
