import { TIMELINE_FEATURES } from '@Data';
import { TimelineFeature } from '@UI';
import './TimelinePage.css';

function TimelinePage() {
    const features = TIMELINE_FEATURES.map((feature, i) => (
        <TimelineFeature {...feature} index={i} />
    ));
    return (
        <div className="timeline-page-wrapper">
            <section className="timeline-page">
                <h2 className="timeline-header">Timeline</h2>
                <div className="timeline-content">
                    <svg className="timeline-line" viewBox="0 0 1 200">
                        <defs>
                            <linearGradient id="gradient1" gradientTransform="rotate(90)">
                                <stop offset="0%" stop-color="#000000" />
                                <stop offset="0%" stop-color="#ffffff" />
                                <stop offset="90%" stop-color="#ffffff" />
                                <stop offset="98%" stop-color="#000000" />
                            </linearGradient>
                            <mask id="mask1" maskUnits="userSpaceOnUse">
                                <rect x={0} y={0} fill="url(#gradient1)" width={1} height={200} />
                            </mask>
                        </defs>
                        <path
                            x={0}
                            y={0}
                            width={1}
                            className="timeline-path"
                            d="M0.5,0.5 L0.5,200"
                            mask="url(#mask1)"
                        />
                    </svg>
                    <ul className="timeline-list">{...features}</ul>
                </div>
            </section>
        </div>
    );
}

export default TimelinePage;
