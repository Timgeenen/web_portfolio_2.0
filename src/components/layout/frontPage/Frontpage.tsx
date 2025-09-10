import { HeroCircle } from '@UI';
import './Frontpage.css';

function Frontpage() {
    return (
        <section id="frontpage">
            <div className="frontpage-content">
                <div className="frontpage-contentWrapper">
                    <h1 className="frontpage-header">
                        <span className="frontpage-headerText">Hi, this is</span>
                        <br />
                        <span className="frontpage-name frontpage-name-mobile">TIM GEENEN</span>
                        <span className="frontpage-header-underline" />
                    </h1>
                    <p className="frontpage-bio">
                        A full-stack developer based in Asia. I enjoy building dynamic, creative
                        products from start to finish. Focused on developing intuitive experiences
                        that constantly grow and improve based on user metrics. Check out some of my
                        work in the Projects section.
                    </p>
                </div>
                <div className="frontpage-heroWrapper">
                    <h1 className="frontpage-name frontpage-name-desktop">TIM GEENEN</h1>
                    <HeroCircle />
                </div>
            </div>
        </section>
    );
}

export default Frontpage;
